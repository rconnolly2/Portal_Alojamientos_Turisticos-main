const carousel = document.getElementById('carrusel');

  document.getElementById('next').onclick = function() {
    const primerelemento = carousel.firstElementChild;

    carousel.classList.add('animacion-horizontal');
    

    // Añado un delay mas largo que la animación
    setTimeout(() => {
      carousel.appendChild(primerelemento);
      carousel.classList.remove('animacion-horizontal');
    }, 400);
    
  };