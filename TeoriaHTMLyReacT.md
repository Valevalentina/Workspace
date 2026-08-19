1. HTML
HTML es el lenguaje de marcado básico para crear páginas web. Es básicamente la estructura o el esqueleto de la página, el que define el contenido sin ponerse a pensar todavía en el diseño o en la lógica rara.

Etiquetas de estructura de un HTML: Son las cajas principales que organizan la página para que tanto el navegador como Google entiendan cómo está repartido todo.

<html>: Es la etiqueta raíz, la mamá de todas, que engloba absolutamente todo el código de la página.

<head>: Va arriba pero no se ve en la pantalla. Ahí guardás la información interna de la página, el título de la pestaña y los enlaces a los archivos de CSS o fuentes.

<body>: Contiene la parte visible del sitio web, todo lo que el usuario sí ve y usa, como imágenes, botones, formularios y párrafos.

<header>: Es la cabecera del sitio web, donde casi siempre se pone el logotipo y el menú principal.

<nav>: Define la sección donde van los enlaces del menú para moverse por todo el sitio.

<main>: Agrupa el contenido central e importante de la página, dejando por fuera cosas repetitivas como menús o barras laterales.

<section> y <article>: <section> sirve para agrupar bloques de contenido que tratan sobre un mismo tema, mientras que <article> es para bloques de información independientes que se entienden solos, tipo una noticia o un post.

<footer>: Contiene la información del pie de página, como los derechos de autor, datos de contacto o enlaces a redes sociales.

Etiquetas para agregar código: Sirven para inyectar código de diseño o de lógica directo en el archivo HTML.

<script>: Se usa para meter o conectar código de JavaScript dentro del HTML y meterle funciones a la página.

<style>: Sirve para escribir reglas de diseño en CSS directamente en el archivo sin necesidad de abrir un archivo .css aparte.

5 Etiquetas de texto: Sirven para estructurar y darle sentido al texto que escribimos.

<h1> a <h6>: Son los títulos y subtítulos ordenados por jerarquía. El <h1> es el título principal (el más importante) y de ahí para abajo son subtítulos.

<p>: Se usa para escribir párrafos de texto normal.

<span>: Es una etiqueta en línea que sirve para encerrar una palabra o frase corta y darle un estilo diferente sin tirar el texto a otra línea.

<strong>: Pone el texto en negrita, dándole más importancia visual y semántica.

<em>: Muestra el texto en cursiva para darle énfasis a una palabra dentro de la oración.

2. JavaScript
JavaScript es el lenguaje de programación que le mete la chispa, la lógica y el movimiento a la página web. Es como el sistema nervioso del sitio.

Variables, tipos de variables, constantes y globales:

¿Cómo funcionan?: Las variables son como cajitas con nombre que guardan datos en la memoria para que los podamos usar o cambiar después en el código.

Tipos de variables (let): Usamos let cuando sabemos que el valor de la variable va a estar cambiando a cada rato según lo que haga el usuario (como los puntos de un juego o un contador).

Constantes (const): Se usa const para guardar valores fijos que jamás van a cambiar ni se pueden modificar a lo largo del programa.

Globales: Son variables creadas por fuera de cualquier función. Se pueden usar desde cualquier lugar del programa, pero hay que manejar de a mucho cuidado porque si se cambian por error desde otro lado, pueden dañar el código.

Estructuras de flujo: Son las instrucciones que le dicen al programa qué camino tomar o cuántas veces repetir algo.

Condicionales (if / else, switch): Evalúan una condición para tomar decisiones. Por ejemplo: si el usuario pone la clave bien, entra; si no, le muestra un mensaje de error.

Bucles (for, while): Sirven para poner a repetir un bloque de código automáticamente varias veces mientras se cumpla una condición (por ejemplo, recorrer una lista de 50 productos para mostrarlos en pantalla uno por uno).

3. CSS
CSS es la capa del diseño. Es el que se encarga de poner la página bien bonita, separando la apariencia visual de la estructura del HTML.

Selectores CSS y cómo modifican elementos:

Selectores: Es la forma de señalar o decirle a CSS a qué parte del HTML le va a cambiar la pinta.

Selector de etiqueta: Le aplica los cambios a todas las etiquetas de ese tipo (por ejemplo, a todos los párrafos <p>).

Selector de clase (.mi-clase): Apunta a cualquier elemento que tenga esa clase asignada. Es superútil porque se puede reutilizar en varios elementos a la vez.

Selector de ID (#mi-id): Apunta a un elemento único con ese identificador exclusivo en toda la página.

Cómo modifican elementos: Le cambian las propiedades visuales a lo que seleccionaste. Pueden modificar el color de la letra (color), el fondo (background-color), el tamaño de la fuente (font-size), las márgenes (margin/padding) o cómo se acomodan en la pantalla usando maquetación moderna como Flexbox (display: flex).

4. React
React es una librería de JavaScript superpopular para construir interfaces de páginas web armándolas por módulos o fichas de Lego llamadas componentes.

Analogía explicativa de un componente de React vs una etiqueta HTML:

Una etiqueta HTML normal (como <button>) es un elemento básico y simple que no tiene lógica propia. Un componente de React es como si te inventaras tu propia etiqueta personalizada e inteligente (por ejemplo, <BotonConContador/>). Esta etiqueta guarda en un solo archivo su estructura de HTML, sus estilos de CSS y su propio código de JavaScript, permitiéndote reutilizar ese botón en cualquier parte de la página conservando todas sus funciones intactas.

Cómo funcionan las props en los componentes:

Las props (propiedades) son los datos o parámetros que un componente padre le pasa a un componente hijo para personalizarlo. Funcionan igualito a los atributos de las etiquetas HTML. Por ejemplo, si tenés un componente <TarjetaUsuario/>, le mandás por props el nombre nombre="Carlos" y la foto foto="avatar.jpg" para usar la misma plantilla con diferentes usuarios sin duplicar código.

Cómo y cuándo se usa useEffect en un componente:

useEffect es un Hook (una función especial de React) que maneja efectos secundarios.

¿Cuándo se usa?: Se usa cuando el componente necesita comunicarse con algo por fuera del ecosistema de React. Los casos típicos son: pedirle datos a un servidor o API cuando la página carga, modificar manualmente el título de la pestaña del navegador o poner temporizadores.

¿Cómo se usa?: Se llama pasándole una función con la tarea que debe hacer y una lista de dependencias que le dice a React cuándo tiene que volver a ejecutarse ese efecto.

Cómo se usa useState para las variables de un componente:

useState es el Hook encargado de manejar el estado (la memoria interna) de un componente.

¿Cómo se usa?: Al crearlo con const [valor, setValor] = useState(inicial), React te da una variable para leer el dato (valor) y una función especial para cambiarlo (setValor). Cuando usás esa función para actualizar el dato, la magia de React hace que el componente vuelva a renderizar (dibujar) la pantalla al instante para mostrar la información actualizada en tiempo real.
