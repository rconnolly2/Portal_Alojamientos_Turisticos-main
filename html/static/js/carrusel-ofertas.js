const carousel = document.getElementById('carrusel');
const boton = document.getElementById('next');

    boton.onclick = function() {
    const primerelemento = carousel.firstElementChild;
    boton.style.display="none";
    carousel.classList.add('animacion-horizontal');
    

    // Añado un delay mas largo que la animación
    setTimeout(() => {
      carousel.appendChild(primerelemento);
      carousel.classList.remove('animacion-horizontal');
      boton.style.display="block";
    }, 400);
    
  };