// Crear audio
// Vía HTML
{/* <audio class="music"
       src="https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3">
</audio>

<script type="module">
  const music = document.querySelector(".music");
  music.play();
</script> */}

// Vía JS
// const url = "https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3";
// const music = new Audio(url);
// music.play();

// Vía DOM
// const audio = document.createElement("audio");
// audio.preload = "auto";
// audio.src = "https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3";
// audio.play();
// document.body.append(audio);


// - Propiedades
/* 
Propiedades	          Descripción
BOOLEAN .autoplay	    El audio se reproducirá automáticamente. OJO: Es muy probable que no funcione*.
BOOLEAN .controls	    Muestra los controles (play, pausa, tiempo, etc...) del elemento multimedia.
BOOLEAN .loop	        Una vez el audio llegue a su fin, volverá a empezar.
BOOLEAN .muted	      El elemento multimedia está silenciado y no se escuchará.
BOOLEAN .defaultMuted	El valor muted inicial por defecto, aunque muted se haya modificado posteriormente.
*/