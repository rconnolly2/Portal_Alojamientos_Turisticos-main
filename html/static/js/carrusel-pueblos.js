function siguiente_pueblo() {
    let carrusel = document.getElementById('carousel');
    let primer_elemento = carousel.firstElementChild;

    // Añado clase con animación
    carrusel.classList.add('animacion-slide');

    // Quito animación y añado primer elemento de div atrás
    setTimeout(() => {
        carrusel.appendChild(primer_elemento);
        carrusel.classList.remove('animacion-slide');
    }, 400);
   

    
  };