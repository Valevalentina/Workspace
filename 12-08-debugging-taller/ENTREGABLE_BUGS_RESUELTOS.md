# 🐛 Taller de Debugging en React - Entregable

**Estudiante:** Nombre  
**Fecha:** 12/08/2026  
**Proyecto:** Gestor de Tareas

---

## 🐛 BUG 1 — La app ni siquiera carga

### 1. Mensaje de error o comportamiento raro observado
```
TypeError: Cannot read properties of undefined (reading 'toUpperCase')
at src/App.jsx:79:57
```
**Comportamiento:** La pantalla está en blanco/roja. React se rompe apenas carga.

### 2. Console.log que usé para confirmar la causa
```javascript
{tareasFiltradas.map((tarea) => {
  console.log('Tarea:', tarea, 'categoria:', tarea.categoria);
  return (
    <li key={tarea.id}>
      {/* ... */}
      <span className="categoria">{tarea.categoria.toUpperCase()}</span>
    </li>
  );
})}
```

**Resultado en consola:**
```
Tarea: {id: 4, texto: "Practicar debugging", completada: false}
categoria: undefined
```

### 3. Línea de código corregida
**ANTES:**
```javascript
{ id: 4, texto: 'Practicar debugging', completada: false },
```

**DESPUÉS:**
```javascript
{ id: 4, texto: 'Practicar debugging', categoria: 'general', completada: false },
```

### 4. Explicación en mis palabras
La tarea con `id: 4` no tenía la propiedad `categoria`, así que cuando React intentó hacer `.toUpperCase()` en `undefined`, falló. Es como intentar escribir un método sobre algo que no existe: `undefined.toUpperCase()` no existe en JavaScript.

---

## 🐛 BUG 2 — La consola no para de imprimir

### 1. Mensaje de error o comportamiento raro observado
La consola imprime infinitamente:
```
Renderizando App, contador: 0
Renderizando App, contador: 1
Renderizando App, contador: 2
Renderizando App, contador: 3
... (y nunca para)
```

**Comportamiento:** El navegador se ralentiza y se queda congelado.

### 2. Console.log que usé para confirmar la causa
```javascript
useEffect(() => {
  console.log('Renderizando App, contador:', contador);
  console.log('¿Tiene arreglo de dependencias?', 'NO');
  setContador(contador + 1);
});
```

Comparé con `PerfilUsuario` que tiene:
```javascript
useEffect(() => {
  console.log('Efecto de perfil (solo se ejecuta 1 vez)');
  obtenerUsuario();
}, []);  // ← Tiene arreglo vacío
```

### 3. Línea de código corregida
**ANTES:**
```javascript
useEffect(() => {
  console.log('Renderizando App, contador:', contador);
  setContador(contador + 1);
});  // ← Sin dependencias
```

**DESPUÉS:**
```javascript
useEffect(() => {
  console.log('Renderizando App, contador:', contador);
  setContador(contador + 1);
}, []);  // ← Con arreglo vacío: se ejecuta solo 1 vez
```

### 4. Explicación en mis palabras
Sin el arreglo de dependencias, `useEffect` se ejecuta después de CADA render. Como adentro hay `setContador()`, esto causa otro render, que ejecuta el efecto de nuevo, que llama `setContador()` otra vez... es un ciclo infinito. El arreglo `[]` le dice a React "solo ejecuta esto una vez".

---

## 🐛 BUG 3 — Los filtros "Pendientes" y "Completadas" no muestran nada

### 1. Mensaje de error o comportamiento raro observado
Hago clic en "Completadas" o "Pendientes" → la lista desaparece completamente, no muestra ninguna tarea.

**Comportamiento:** Los botones no funcionan, la lista siempre aparece vacía cuando filtro.

### 2. Console.log que usé para confirmar la causa
```javascript
const tareasFiltradas = tareas.filter((tarea) => {
  if (filtro === 'todas') return true;
  console.log('Tipo de tarea.completada:', typeof tarea.completada, 'Valor:', tarea.completada);
  console.log('Comparación con string "true":', tarea.completada === 'true');
  if (filtro === 'completadas') return tarea.completada === 'true';
  if (filtro === 'pendientes') return tarea.completada === 'false';
  return true;
});
```

**Resultado en consola:**
```
Tipo de tarea.completada: boolean Valor: true
Comparación con string "true": false

Tipo de tarea.completada: boolean Valor: true
Comparación con string "true": false
```

### 3. Línea de código corregida
**ANTES:**
```javascript
if (filtro === 'completadas') return tarea.completada === 'true';  // Compara boolean con string
if (filtro === 'pendientes') return tarea.completada === 'false';  // Compara boolean con string
```

**DESPUÉS:**
```javascript
if (filtro === 'completadas') return tarea.completada === true;    // Compara boolean con boolean
if (filtro === 'pendientes') return tarea.completada === false;    // Compara boolean con boolean
```

### 4. Explicación en mis palabras
En JavaScript, `true` (booleano) es diferente de `'true'` (string). `true === 'true'` siempre es `false`. Como comparaba contra strings, el filtro nunca encontraba coincidencias. Necesitaba comparar booleanos contra booleanos, no contra strings.

---

## 🐛 BUG 4 — Agregar una tarea no la muestra en la lista

### 1. Mensaje de error o comportamiento raro observado
Escribo en el input "Hacer tarea nueva", presiono "Agregar" → nada sucede, la tarea no aparece en la lista.

**Comportamiento:** El formulario se vacía (buen signo), pero la tarea no aparece.

### 2. Console.log que usé para confirmar la causa
```javascript
function agregarTarea(texto) {
  if (!texto.trim()) return;
  console.log('Antes de push:', tareas.length);
  tareas.push({ id: Date.now(), texto, categoria: 'general', completada: false });
  console.log('Después de push:', tareas.length);
  console.log('¿Es el mismo arreglo?', tareas === tareas);  // Siempre true
  setTareas(tareas);
}
```

**Resultado en consola:**
```
Antes de push: 4
Después de push: 5
¿Es el mismo arreglo? true
```

### 3. Línea de código corregida
**ANTES:**
```javascript
tareas.push({ id: Date.now(), texto, categoria: 'general', completada: false });
setTareas(tareas);  // Pasa la referencia del mismo arreglo
```

**DESPUÉS:**
```javascript
setTareas([...tareas, { id: Date.now(), texto, categoria: 'general', completada: false }]);
// Crea un NUEVO arreglo con spread operator
```

### 4. Explicación en mis palabras
React compara referencias, no el contenido. Cuando usé `push()`, modifiqué el arreglo original en lugar de crear uno nuevo. React vio que la referencia era la misma (`tareas === tareas` es siempre true) y no actualizó la interfaz. Con el spread operator `[...tareas, nuevaTarea]`, creo un arreglo completamente nuevo, y React detecta el cambio.

---

## 🐛 BUG 5 — "Cargando perfil..." se queda pegado

### 1. Mensaje de error o comportamiento raro observado
Recargo la página varias veces (pasa el 50% de las veces) → el perfil se queda en "Cargando perfil..." para siempre.

**Comportamiento:** La pantalla no cambia nunca. Revisé la consola y hay un error en rojo:
```
Uncaught Error: No se pudo cargar el usuario
```

### 2. Console.log que usé para confirmar la causa
```javascript
function obtenerUsuario() {
  const exito = Math.random() > 0.5;
  console.log('¿Éxito?', exito);

  setTimeout(() => {
    if (exito) {
      console.log('Éxito: cargando usuario');
      setUsuario({ nombre: 'Estudiante React' });
    } else {
      console.log('Error: lanzando excepción');
      throw new Error('No se pudo cargar el usuario');  // ← Esto explota
    }
  }, 1000);
}
```

**Resultado en consola (50% de las veces):**
```
¿Éxito? false
Error: lanzando excepción
Uncaught Error: No se pudo cargar el usuario  ← Error no atrapado
```

### 3. Línea de código corregida
**ANTES:**
```javascript
function obtenerUsuario() {
  const exito = Math.random() > 0.5;

  setTimeout(() => {
    if (exito) {
      setUsuario({ nombre: 'Estudiante React' });
    } else {
      throw new Error('No se pudo cargar el usuario');  // ← Explota sin ser atrapado
    }
  }, 1000);
}
```

**DESPUÉS:**
```javascript
function obtenerUsuario() {
  const exito = Math.random() > 0.5;

  setTimeout(() => {
    try {
      if (exito) {
        setUsuario({ nombre: 'Estudiante React' });
      } else {
        throw new Error('No se pudo cargar el usuario');
      }
    } catch (error) {
      console.error('Error al cargar perfil:', error.message);
      setUsuario({ nombre: 'Error: no se pudo cargar el perfil' });
    }
  }, 1000);
}
```

### 4. Explicación en mis palabras
El error se lanzaba pero nadie lo atrapaba (no había `try/catch`). Sin atraparlo, la promesa falla silenciosamente y `setUsuario` nunca se llama, dejando la interfaz pegada en "Cargando perfil...". Con `try/catch`, agarro el error, lo muestro en consola Y actualizo el estado para mostrar un mensaje de error al usuario.

---

## Resumen de aprendizajes

| Bug | Concepto | Lección |
|-----|----------|---------|
| 1 | Propiedades faltantes | Siempre valida que los datos existan antes de usarlos |
| 2 | Dependencias en useEffect | El arreglo `[]` es crucial: sin él, infinito render |
| 3 | Comparación de tipos | `true !== 'true'` — cuidado con strings vs booleanos |
| 4 | Mutación vs inmutabilidad | React necesita referencias nuevas para detectar cambios |
| 5 | Manejo de errores async | Usa `try/catch` en operaciones asincrónicas |
