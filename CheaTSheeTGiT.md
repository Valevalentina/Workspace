# Manual básico de Git: Commit, Push y Pull

En Git y GitHub existen comandos fundamentales para gestionar versiones de código y colaborar en proyectos.  
A continuación se explican tres de los más importantes: **commit, push y pull**.

---

## 1. Commit

Un **commit** es una acción que guarda los cambios realizados en los archivos de tu proyecto en el repositorio local de Git.

Cada commit crea un **punto de control** con un mensaje descriptivo que permite rastrear el historial de modificaciones del proyecto.

### Comando

```bash
git commit -m "mensaje"
```

### Ejemplo

```bash
git commit -m "Se agregan cambios al archivo principal"
```

---

## 2. Push

El **push** envía los commits que tienes en tu repositorio local hacia el repositorio remoto en GitHub.

Esto permite actualizar el repositorio en línea con los cambios que realizaste en tu computadora.

### Comando

```bash
git push origin nombre-de-la-rama
```

### Ejemplo

```bash
git push origin main
```

---

## 3. Pull

El **pull** descarga y fusiona los cambios del repositorio remoto (GitHub) al repositorio local.

Este comando es útil para **sincronizar tu proyecto con los cambios realizados por otros colaboradores**.

### Comando

```bash
git pull origin nombre-de-la-rama
```

### Ejemplo

```bash
git pull origin main
```

---

## Conclusión

Los comandos **commit, push y pull** permiten gestionar versiones del código y trabajar en equipo sin perder cambios.

Flujo básico de trabajo:

```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

Para actualizar el repositorio antes de trabajar:

```bash
git pull origin main
```