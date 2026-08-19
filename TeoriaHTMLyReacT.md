Teoria sobre HTML, JavaScript, CSS y React

1. HTML

HTML no es un lenguaje de programación como tal, sino la estructura o el esqueleto de la pagina web. Sirve para definir el contenido de la pagina sin importar todavia el diseño o la lógica.

Las etiquetas de estructura sirven para organizar la pagina por bloques. Esta html que envuelve todo el codigo de la pagina; head que va arriba y guarda informacion interna como el titulo de la pestaña o conexiones a fuentes y estilos; y body que es donde va todo lo visible que ve el usuario. Tambien estan header para el encabezado con el logo, nav para el menu de navegacion, main para el contenido principal, section para agrupar temas, article para bloques de texto independientes como entradas de blog, y footer para el pie de pagina con creditos o redes.

Para agregar codigo directamente en el documento estan script, que sirve para conectar o escribir codigo de JavaScript, y style, que permite meter reglas de diseño de CSS sin abrir otro archivo.

Entre las etiquetas de texto estan h1 a h6 que son los titulos ordenados por importancia (h1 es el titulo principal), p para escribir párrafos normales, span para encerrar una palabra corta y cambiarle el estilo sin romper la linea, strong para poner texto en negrita dando importancia, y em para poner texto en cursiva y darle énfasis.

2. JavaScript

JavaScript es el lenguaje de programación que le da la lógica y el movimiento a la pagina. Es básicamente el sistema nervioso del sitio web.

Las variables sirven como cajas con nombre para guardar datos en la memoria que podemos usar o cambiar despues. Para definir variables usamos let cuando el valor va a cambiar a cada rato (como los puntos de un juego o un contador), y const para valores fijos que no van a cambiar en todo el programa. Las variables globales son las que se crean por fuera de cualquier función y se pueden consultar desde cualquier lado, pero hay que tener cuidado porque si se modifican por error desde otro lado pueden dañar el codigo.

Las estructuras de flujo son instrucciones que deciden qué camino toma el codigo. Estan las condicionales como if/else o switch, que sirven para tomar decisiones (por ejemplo si el usuario pone la clave bien entra, si no muestra error). Y estan los bucles como for o while, que sirven para repetir una tarea varias veces de forma automática mientras se cumpla una condición.

3. CSS

CSS es la capa de diseño de la pagina web. Se encarga de poner todo bonito separando los estilos de la estructura en HTML.

Los selectores son la forma de decirle a CSS a qué parte del HTML le vamos a aplicar estilos. Se pueden usar selectores de etiqueta (cambian todas las etiquetas de ese tipo), selectores de clase con un punto como .mi-clase (para aplicarselo a varios elementos), y selectores de ID con #mi-id (unico para un solo elemento).

Los selectores modifican los elementos cambiando propiedades como el color de texto con color, el color de fondo con background-color, el tamaño de letra con font-size, las margenes y espacios con margin o padding, y la posicion en pantalla usando flexbox con display: flex.

4. React

React es una librería de JavaScript que se usa para armar la interfaz de una pagina web mediante pedazos modulares llamados componentes.

Pensar en un componente es como imaginarse una etiqueta de HTML personalizada e inteligente. Una etiqueta normal como button solo muestra un boton simple, pero un componente de React puede ser algo como BotonConContador que guarda en un solo archivo su HTML, sus estilos CSS y su lógica en JavaScript para contar clics por sí solo y reutilizarlo cuantas veces se quiera.

Las props son parametros que un componente padre le manda a un componente hijo para personalizarlo. Funcionan igual que los atributos en HTML. Por ejemplo a una TarjetaUsuario se le mandan por props el nombre y la foto para usar la misma estructura con varios usuarios diferentes.

useEffect es un Hook de React que sirve para manejar efectos secundarios. Se usa cuando el componente necesita conectarse con cosas por fuera de React, como pedir datos a un servidor o API cuando la pagina carga, cambiar el titulo del navegador o poner temporizadores. Se ejecuta al cargarse el componente o cuando cambian las variables de sus dependencias.

useState es el Hook que maneja la memoria interna o variables de estado de un componente. Al declararlo nos da la variable y una función para cambiarla. Cuando usamos esa función para actualizar el valor, React se da cuenta y vuelve a renderizar la pantalla automaticamente para mostrar la información actualizada al instante.
