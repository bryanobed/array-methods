// La La etiqueta HTML <canvas>: En HTML, existe un elemento HTML llamado <canvas> que sirve como lienzo en blanco donde se puede dibujar mediante programación. Este sistema es el que se utiliza para animaciones, interacciones con el usuario o juegos basados en web.
/*
<canvas></canvas>

<script type="module">
  const canvas = document.querySelector("canvas");
  canvas.width = 320;
  canvas.height = 240;
  canvas.style.background = "#000";
</script>*/



// Para trabajar en canvas se crea un contexto, que es el lienzo que nos permite controlar nuestro lienzo.
// getContext("2d|webgl2|webgpu|bitmaprenderer"); método para crear el contexto
// Podemos establecer diferentes tipos diferentes de lienzo:
/* Tipo	Objeto	Orientación del contexto
"2d"	CanvasRenderingContext2D	Gráficos 2D (lineas, formas, texto, imágenes...).
"webgl2"	WebGL2RenderingContext	API basada en OpenGL ES 3.0 para 2D/3D con aceleración por hardware.
"webgpu"	GPUCanvasContext	Gráficos de alta eficiencia (optimizado para tarjetas gráficas modernas).
"bitmaprenderer"	ImageBitmapRenderingContext	Orientado para renderizar imágenes con alto rendimiento.
 */

// propiedades: .fillStyles, .strokeStyle
// Segundo objeto de canvas como propiedad
/* Propiedad	Descripción
BOOLEAN alpha	Indica si el fondo tendrá transparencia. Por defecto, true.
STRING  colorSpace	Por defecto, srgb. Define el espacio de color.
BOOLEAN desynchronized	Intenta reducir el retraso (lag) en animaciones rápidas (puede causar tearing).
BOOLEAN willReadFrequently	Si vas a leer píxeles frecuentemente con getImageData(), mejor rendimiento. */

/* 
Método	Descripción
Formas geométricas
.beginPath() / .closePath()	Comienza o cierra una ruta.
.ellipse()	Crea un círculo ovalado (elipse) indicando centro, radios, ángulos, etc.
.rect()	Crea un rectángulo con un ancho y altura indicado.
.stroke() / .fill()	Dibuja el contorno de la ruta, y rellena el interior.
.moveTo() / .lineTo()	Se mueve a una coordenada sin dibujar trazo o dibujándolo.
Dibujo directo
.strokeRect() / .fillRect()	Dibuja el contorno o el relleno de un rectángulo.
.strokeText() / .fillText()	Dibuja el contorno o el relleno de un texto.
.roundRect()	Dibuja un rectángulo con bordes redondeados.
.clearRect()	Borra el lienzo completo o una porción de él.
Curvas
.arc() / .arcTo()	Dibuja el arco de un círculo o el arco entre dos líneas.
.bezierCurveTo()	Dibuja una curva bézier cúbica a partir de un punto con 3 puntos de control.
.quadraticCurveTo()	Dibuja una curva cuadrática a partir de un punto, con 2 puntos de control.
*/

// Código de práctica en canvas del index.html
/* Dibujar con relleno
1️⃣ Primero, con .fillStyle establecemos el color de relleno con el que vamos a pintar.
2️⃣ Luego, con .fillRect(x, y, width, height) dibujamos un rectángulo.
3️⃣ En este caso, el rectángulo se dibuja automáticamente.
4️⃣ Sin embargo, en el segundo ejemplo, dibujamos un rectángulo con rect() y un círculo con ellipse(), pero estas no se dibujan directamente y hay que llamar a fill() para hacerlo. */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 200;
canvas.style.background = "#000";
// centrar canvas
canvas.style.display = "block";
canvas.style.margin = "0 auto";

// // Dibuja rectángulo 100x100 en (50,50) de color indigo
// ctx.fillStyle = "indigo";
// ctx.fillRect(20, 20, 100, 100);
// // Dibuja un rectángulo y una elipse (formas compuestas) de color rosa
// ctx.fillStyle = "white";
// ctx.rect(50, 50, 100, 100);
// ctx.ellipse(125, 125, 50, 50, Math.PI / 3, 0, 2 * Math.PI)
// ctx.fill();

// Dibujar trazos
// .lineWidth establecemos el número de píxeles que tendrá el trazo.
// .strokeStyle definimosel color.
// ctx.lineWidth = 3;
// ctx.strokeStyle = "white";
// // Dibuja rectángulo 100x100 en (25,25) de color indigo
// ctx.strokeStyle = "indigo";
// ctx.strokeRect(25, 25, 100, 100);
// // Dibuja un rectángulo y una elipse (formas compuestas) de color rosa
// ctx.strokeStyle = "deeppink";
// ctx.rect(50, 50, 100, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(125, 125, 50, 50, Math.PI / 3, 0, 2 * Math.PI);
// ctx.stroke();
// ctx.closePath();

// Dibujar con líneas podemos utilizar los métodos .moveTo() y .lineTo().
// ctx.lineWidth = 4;
// ctx.strokeStyle = "white";
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.stroke();
// ctx.closePath();

// Dibujar textos 
// .font:  podemos establecer detalles relacionados con la tipografía
// .fillStyle: establecemos el color de relleno y color texto
// .fillText() podemos establecer un texto en unas coordenadas concretas:

// canvas.width = 600;
// canvas.height = 480;

// ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, canvas.width, canvas.height);
// ctx.fillStyle = "white";
// ctx.font = '40px EnterCommand';
// ctx.fillText("PLAY ▶", 75, 100);
// ctx.fillText("--:--", 475, 100);
// ctx.fillText("MANZ.DEV", 75, 400);
// ctx.fillText("0:00:00", 425, 400);


// Estado del canvas
//  <canvas> tiene la posibilidad de guardar su estado en una estructura de tipo pila y recuperarlo posteriormente. Cuando hablamos de estado nos referimos a propiedades como .fillStyle, .strokeStyle, .globalAlpha, etc... También transformaciones como translate, scale, rotate o recortes con .clip().
// Utilizando el método .save() guardamos en la pila, mientras que con .restore() recuperamos el último estado guardado.

/* Ejemplo
1️⃣ Establecemos un color rosa de relleno y guardamos el estado.
2️⃣ Cambiamos el color de relleno a verde.
3️⃣ Cada segundo, dibujamos un cuadradito (verde).
4️⃣ Cuando hagamos click, recuperamos el estado y lo pintará rosa.
*/

// Guardamos el estado con el color de relleno rosa
// ctx.fillStyle = "red";
// ctx.save();
// // Cada segundo se añadirá un nuevo cuadrado verde
// ctx.fillStyle = "green";
// ctx.rotate(50, 50);
// setInterval(() => {
//   const x = Math.floor(Math.random() * canvas.width);
//   const y = Math.floor(Math.random() * canvas.height);
//   ctx.fillRect(x, y, 50, 50);
// }, 1000);

// // Cuando hagamos click, recuperamos el estado y lo pintaremos red
// canvas.addEventListener("click", () => {
//   ctx.restore();
// });

/* 
Método	Descripción
Estado
.save()	Guarda el estado actual del lienzo en una pila.
.restore()	Restaura el último estado guardado en la pila con .save().
.reset()	Reinicia el estado del lienzo. Experimental, se recomienda usar .resetTransform().

Transformaciones
.transform()	Aplica una transformación acumulativa, respetando la transformación previa.
.setTransform()	Aplica una transformación, reemplazando cualquier transformación previa.
.getTransform()	Devuelve un objeto DOMMatrix con la transformación actual del lienzo.
.resetTransform()	Elimina todas las transformaciones previas. Igual a .setTransform(1, 0, 0, 1, 0, 0).
.scale()	Escala según los factores proporcionados.
.translate()	Desplaza a un nuevo punto definido por (x, y).
.rotate()	Rota en torno a su origen actual (ángulo en radianes).
.clip()	Recorta una región particular del lienzo.
*/


// ********** Animaciones con <canvas> **********
// --> Inicialización
// establecemos las coordenadas x e y donde estará el círculo.
// Las variables dx y dy definen la velocidad con la que avanza en cada eje.
// radius es el radio del círculo.
// let x = 100, y = 100, dx = 2, dy = 2, radius = 25;
// const FPS = 1000 / 60;

// // --> Actualización
// // actualizamos la coordenada y (eje vertical) aumentándolo en la velocidad dy.
// // También comprobamos si se ha llegado al límite inferior o superior, en cuyo caso, invertimos el signo de la velocidad:
// y += dy
// if (y + radius > canvas.height || y - radius < 0) dy *= -1;

// // --> Renderización
// // Borramos el lienzo con clearRect() en cada fotograma para evitar que se acumulen
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.beginPath();
// ctx.arc(x, y, radius, 0, Math.PI * 2);
// ctx.fillStyle = "deeppink";
// ctx.fill();
// ctx.closePath();


// --> Organización 
// 1️⃣ Fuera de gameLoop(), inicialización (coordenadas, FPS, radio del círculo, etc...)
// 2️⃣ Dentro de update(), actualización (mover el círculo y comprobar si ha llegado a un límite)
// 3️⃣ Dentro de draw(), renderización (borrar lienzo y dibujar posición del círculo)
// 4️⃣ Dentro de gameLoop(), reiniciar bucle (simplemente, volver a ejecutar el bucle)

// // Inicialización
// let y = 100, dy = 2;
// const x = 100, dx = 2, radius = 25;
// const FPS = 1000 / 60;

// // Actualización de lógica
// const update = () => {
//   y += dy
//   if (y + radius > canvas.height || y - radius < 0) dy *= -1;
// }

// // Renderizado y pintado
// const draw = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2);
//   ctx.fillStyle = "white";
//   ctx.fill();
//   ctx.closePath();
// }

// // Bucle del juego (update, draw, reinicio)
// function gameLoop() {
//   update();
//   draw();
//   setTimeout(gameLoop, FPS);
// }
// gameLoop();

// Lo mismo de arriba con -> requestAnimationFrame(gameLoop)
// Inicialización
let y = 100, dy = 1;
const x = 100, dx = 2, radius = 25;

// Actualización de lógica
const update = () => {
  y += dy
  if (y + radius > canvas.height || y - radius < 0) dy *= -1;
}

// Renderizado y pintado
const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "deeppink";
  ctx.fill();
  ctx.closePath();
}

// Bucle del juego (update, draw, reinicio)
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();