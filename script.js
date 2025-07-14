// script.js

// Selecciona el botón del correo
const botonEmail = document.querySelector('a[href^="mailto:"]');

// Agrega un evento al hacer clic
botonEmail.addEventListener('click', () => {
  console.log('Haz hecho clic en el correo.');
  alert('Abriendo correo.');
});

// const imagenes = document.querySelectorAll('.galeria-paisajes img');
// const modal = document.getElementById('modal');
// const modalImg = document.getElementById('modal-img');

// imagenes.forEach(imagen => {
//   imagen.addEventListener('click', () => {
//     modalImg.src = imagen.src;
//     modal.style.display = 'flex';
//   });
// });

// modal.addEventListener('click', () => {
//   modal.style.display = 'none';
//   modalImg.src = ''; // Limpia la imagen cuando cierras el modal
// });

const albums = {
  paisajes: [
    "imgs/paisajes/psj-1.jpg",
    "imgs/paisajes/psj-2.jpg",
    "imgs/paisajes/psj-3.jpg",
    "imgs/paisajes/psj-4.jpg",
    "imgs/paisajes/psj-5.jpg",
    "imgs/paisajes/psj-6.jpg",
    "imgs/paisajes/psj-7.jpg",
    "imgs/paisajes/psj-8.jpg",
    "imgs/paisajes/psj-9.jpg",
    "imgs/paisajes/psj-10.jpg",
  ],
  retratos: [
    "imgs/retratos/retrato_1.jpg",
    "imgs/retratos/retrato_2.jpg",
    "imgs/retratos/retrato_4.jpg",
    "imgs/retratos/retrato_5.jpg",
    "imgs/retratos/retrato_6.jpg",
    "imgs/retratos/retrato_7.jpg",
    "imgs/retratos/retrato_8.jpg",
    "imgs/retratos/retrato_9.jpg",
  ],
  rutina: [
    "imgs/rutina/rutina-1.jpg",
    "imgs/rutina/rutina-2.jpg",
    "imgs/rutina/rutina-3.jpg",
    "imgs/rutina/rutina-5.jpg",
    "imgs/rutina/rutina-6.jpg",
    "imgs/rutina/rutina-7.jpg",
    "imgs/rutina/rutina-8.jpg",
  ],
  byn: [
    "imgs/BYN/byn-1.jpg",
    "imgs/BYN/byn-2.jpg",
    "imgs/BYN/byn-3.jpg",
    "imgs/BYN/byn-4.jpg",
    "imgs/BYN/byn-5.jpg",
    "imgs/BYN/byn-6.jpg",
    "imgs/BYN/byn-7.jpg",
    "imgs/BYN/byn-8.jpg",
    "imgs/BYN/byn-9.jpg",
    "imgs/BYN/byn-10.jpg",
    "imgs/BYN/byn-11.jpg",
  ],
  arq: [
    "imgs/arq/arq-3.jpg",
    "imgs/arq/arq-5.jpg",
    "imgs/arq/arq-6.jpg",
    "imgs/arq/arq-7.jpg",
    "imgs/arq/arq-8.jpg",
    "imgs/arq/arq-9.jpg",
    "imgs/arq/arq-10.jpg",
    "imgs/arq/arq-11.jpg",
  ]
};

const modal = document.getElementById("modal");
const galeriaAlbum = document.getElementById("galeria-album");
const cerrarModalBtn = document.getElementById("cerrar-modal");


document.querySelectorAll(".album").forEach(albumDiv => {
  albumDiv.addEventListener("click", () => {
    const albumName = albumDiv.dataset.album;
    abrirModal(albumName);
  });
});

cerrarModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  galeriaAlbum.innerHTML = "";
});

// modal.addEventListener("click", function (e) {
//   if (!contenido.contains(e.target)) {
//     modal.classList.add("oculto");
//   }
// });

function abrirModal(albumName) {
  galeriaAlbum.innerHTML = "";
  const fotos = albums[albumName];
  fotos.forEach(foto => {
    const img = document.createElement("img");
    img.src = foto;
    img.alt = albumName;
    galeriaAlbum.appendChild(img);

    // Click para abrir la imagen en pestaña nueva (puedes cambiarlo para lightbox más avanzado)
    img.addEventListener("click", () => {
      window.open(foto, "_blank");
    });
  });
  modal.style.display = "flex";
}

 window.addEventListener('scroll', () => {
    const boton = document.querySelector('.boton');
    if (window.scrollY > 1000) {
      boton.classList.remove('oculto');
    } else {
      boton.classList.add('oculto');
    }
  });

  /**
   * window.addEventListener('scroll', () => { ... });
Está escuchando el evento de scroll de la ventana.

Es decir, cuando el usuario hace scroll hacia abajo o hacia arriba, esta función se ejecuta.

const boton = document.querySelector('.boton-flotante');
Busca en el documento un elemento con la clase .boton-flotante y lo guarda en la variable boton.

Este es tu botón flotante que querés mostrar u ocultar.

if (window.scrollY > 100) { ... }
window.scrollY indica cuántos pixeles hacia abajo se ha hecho scroll en la página.

Si es mayor a 100, significa que el usuario ya se desplazó un poco hacia abajo.

boton.classList.remove('oculto');
Si el usuario hizo scroll más de 100 píxeles, se quita la clase oculto,
 haciendo que el botón se vea (porque en CSS oculto le baja la opacidad y desactiva el clic).

 else { boton.classList.add('oculto'); }
Si el usuario no ha hecho suficiente scroll (está arriba de todo), 
se vuelve a aplicar la clase oculto para que el botón desaparezca de nuevo.

   */



// ()	Los paréntesis indican que no hay parámetros que se reciben en esta función.
// =>	Esto es la flecha de la "función flecha" (arrow function) de JavaScript.
// { ... }	Aquí va el bloque de código que quieres ejecutar cuando hagan clic.
// Es una forma moderna y más corta de escribir funciones.
// Antes, esto se escribía así:

// function() {
//   console.log('...');
// }

// Ahora, con función flecha:
// () => {
//   console.log('...');
// }

// 'click'	Evento que ocurre al hacer clic
// () => { ... }	Función flecha que se ejecuta cuando ocurre el evento
// console.log()	Muestra un mensaje en la consola
// alert()	Muestra una alerta (ventana emergente)