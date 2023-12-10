// valores de alt de imagen que buscamos cuando selecciono un checkbox con ese id
var filtro_sin_select_estrellas = {
    checkestrella1: 'estrella1',
    checkestrella2: 'estrella2',
    checkestrella3: 'estrella3',
    checkestrella4: 'estrella4',
    checkestrella5: 'estrella5',

  };
  
  // añado event listener de cambiar su estado a cada checkbox
  for (var checkboxId in filtro_sin_select_estrellas) {
    if (filtro_sin_select_estrellas.hasOwnProperty(checkboxId)) {
      document.getElementById(checkboxId).addEventListener('change', function () {
        CambioCheckbox(); // cuando cambien ejecuto función
      });
    }
  }
  
 
  function CambioCheckbox() {
    
    // coger divs que tienen cartas como clase
    var containers = document.querySelectorAll('.cartas');
  
    // Loop through each container
    containers.forEach(function (container) {
        // Get all the div elements inside the container
        var divs = container.getElementsByTagName('div');

        // creo lista de filtros seleccionados
        var filtros_lista = [];

        // itero en cada checkbox
        for (var checkboxId in filtro_sin_select_estrellas) {
            if (filtro_sin_select_estrellas.hasOwnProperty(checkboxId)) {
                // miro si esta checked
                if (document.getElementById(checkboxId).checked) {
                    // si lo esta añado el alt de img a mi lista de filtros
                    filtros_lista.push(filtro_sin_select_estrellas[checkboxId]);
                }
            }
        }
  
            // itero en cada elemento div
            for (var i = 0; i < divs.length; i++) {
            // miro si div contieve una img con el alt de la lista seleccionada
            var img = divs[i].querySelector('img[alt*="' + filtros_lista.join('"],img[alt*="') + '"]');
        
            // si lo encontramos que tien filtro lo mostramos en pantalla
            if (img) {
                divs[i].style.display = 'block';
            } else {
                // si no ponemos display none
                divs[i].style.display = 'none';
            }
            }
    });
  }
  