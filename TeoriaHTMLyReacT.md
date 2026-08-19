1. HTML

HTML es el lenguaje de marcado básico para crear páginas web. Define el contenido y la estructura básica sin preocuparse por el diseño visual o la lógica avanzada.

Etiquetas de estructura: Organizan el documento para que el navegador y los buscadores entiendan la jerarquía del contenido.

<html>: Es la etiqueta raíz que engloba absolutamente todo el código de la página.

<head>: Contiene metadatos, la codificación de caracteres, el título de la pestaña y los enlaces a los archivos de CSS o fuentes externas.

<body>: Contiene la parte visible del sitio web, como imágenes, botones, formularios y párrafos.

<header>: Representa la sección superior o el encabezado del sitio, donde suele ir el logotipo y el menú principal.

<nav>: Define una sección con enlaces de navegación para desplazarse por el sitio web.

<main>: Agrupa el contenido central e indivisible de la página, descartando barras laterales o menús repetitivos.

<section> y <article>: <section> agrupa bloques de contenido por un tema en común, mientras que <article> encierra información que tiene sentido de forma independiente, como un post de blog.

<footer>: Contiene la información del pie de página, incluyendo avisos legales, enlaces secundarios y créditos.

Etiquetas para agregar código:

<script>: Permite inyectar o importar scripts de JavaScript dentro del código para sumar funcionalidad.

<style>: Permite escribir reglas de diseño en CSS directamente en el documento HTML.

5 Etiquetas de texto:

<h1> a <h6>: Encabezados ordenados por jerarquía. El <h1> es el título principal de mayor importancia y los demás son subtítulos.

<p>: Define un párrafo de texto estándar con un salto de línea automático al final.

<span>: Una etiqueta de texto en línea que se utiliza para aplicar estilos específicos a palabras o frases sin romper el flujo del contenido.

<strong>: Resalta texto en negrita, otorgándole peso semántico e importancia visual.

<em>: Muestra el texto en cursiva, aplicándole énfasis dentro de una oración.

2. JavaScript

JavaScript es el lenguaje de programación encargado de la interactividad y la lógica en el navegador web.

Variables, tipos, constantes y globales:

¿Cómo funcionan?: Las variables son espacio de memoria reservado para almacenar datos que el código utilizará o actualizará durante la ejecución.

Tipos: let sirve para declarar variables cuyos valores cambiarán constantemente (como el valor de un carrito de compras). const declara constantes cuyo valor asignado no se puede reasignar más adelante.

Globales: Variables declaradas fuera de cualquier función o bloque. Se pueden consultar desde cualquier lugar del programa, pero si se modifican sin control pueden romper otras funciones.

Estructuras de flujo: Modifican el orden en que se ejecutan las sentencias del código según ciertas condiciones.

Condicionales (if / else, switch): Evalúan una condición booleana (verdadera o falsa) para decidir qué camino tomar. Ejemplo: verificar si el usuario ingresó la clave correcta para darle acceso.

Bucles (for, while): Repiten la ejecución de un bloque de código automáticamente hasta que la condición definida deje de cumplirse (por ejemplo, mostrar 50 productos de una lista uno por uno).

3. CSS

CSS determina la presentación gráfica de la página, separando el diseño del contenido estructurado.

Selectores y cómo modifican elementos:

Selectores: Son los métodos para indicar qué elemento HTML recibirá los estilos. Pueden ser por etiqueta (p), por clase (.mi-clase, reutilizable en múltiples etiquetas) o por ID (#mi-id, único en toda la página).

Cómo modifican: Aplican reglas visuales a las etiquetas especificadas. Pueden alterar el color del texto (color), el fondo (background-color), las fuentes (font-size), el espaciado interno/externo (padding/margin) o la disposición de los elementos en la pantalla mediante sistemas de maquetación como Flexbox (display: flex) o Grid (display: grid).

4. React

React es una biblioteca de JavaScript creada para construir interfaces de usuario modulares y reactivas.

Analogía Componente vs Etiqueta HTML: Una etiqueta HTML regular (<button>) solo muestra un botón básico sin inteligencia propia. Un componente de React es como crear una etiqueta personalizada (<BotonMeGusta/>) que empaqueta en un solo archivo su estructura HTML, sus estilos CSS y su lógica de JavaScript. Esto permite reutilizar dicho botón en múltiples secciones del sitio conservando todas sus funciones intactas.

Props (Propiedades): Son parámetros que un componente padre transmite a un componente hijo para configurar sus datos de entrada. Por ejemplo, al componente <TarjetaUsuario/> se le transfieren props como nombre="Laura" o imagen="foto.jpg" para poblar el diseño sin duplicar el código.

UseEffect: Es un Hook (función predefinida de React) diseñado para ejecutar efectos secundarios. Se utiliza cuando un componente debe sincronizarse con sistemas externos a React, como realizar peticiones HTTP a un servidor (API), modificar el título de la pestaña del navegador o iniciar temporizadores.

UseState: Es el Hook que administra la memoria interna (estado) de un componente. Permite declarar variables especiales que, al actualizar su valor mediante su función modificadora, provocan que React vuelva a renderizar (redibujar) automáticamente el componente en la pantalla para reflejar los cambios en tiempo real.
