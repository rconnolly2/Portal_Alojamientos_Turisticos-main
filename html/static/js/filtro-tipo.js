// valores de alt de imagen que buscamos cuando selecciono un checkbox con ese id
var filtro_sin_select_tipo = {
    check_apartamento_turistico: 'aturistico',
    check_hotel_apartamento: 'hapartamento',
    check_hotel: 'hotel',
    check_hostal_residencia: 'hresidencia',
    check_hostal: 'hostal',

  };
  
  // añado event listener de cambiar su estado a cada checkbox
  for (var checkboxId in filtro_sin_select_tipo) {
    if (filtro_sin_select_tipo.hasOwnProperty(checkboxId)) {
      document.getElementById(checkboxId).addEventListener('change', function () {
        CambioCheckboxTipo(); // cuando cambien ejecuto función
      });
    }
  }
  
 
  function CambioCheckboxTipo() {
    
    // coger divs que tienen cartas como clase
    var containers = document.querySelectorAll('.cartas');
  
    // Loop through each container
    containers.forEach(function (container) {
        // Get all the div elements inside the container
        var divs = container.getElementsByTagName('div');

        // creo lista de filtros seleccionados
        var filtros_lista = [];

        // itero en cada checkbox
        for (var checkboxId in filtro_sin_select_tipo) {
            if (filtro_sin_select_tipo.hasOwnProperty(checkboxId)) {
                // miro si esta checked
                if (document.getElementById(checkboxId).checked) {
                    // si lo esta añado el alt de img a mi lista de filtros
                    filtros_lista.push(filtro_sin_select_tipo[checkboxId]);
                }
            }
        }
  
            // itero en cada elemento div
            for (var i = 0; i < divs.length; i++) {
            // miro si div contieve una img con el alt de la lista seleccionada
            var img = divs[i].querySelector('img[alt*="' + filtros_lista.join('"],img[alt*="') + '"]');
        
            // si lo encontramos que tiene filtro lo mostramos en pantalla
            if (img) {
                divs[i].style.display = 'block';
            } else {
                // si no ponemos display none
                divs[i].style.display = 'none';
            }
            }
    });
  }
  