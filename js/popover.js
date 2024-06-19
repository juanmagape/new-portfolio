//POPOVER
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const texto = document.getElementById('textoACopiar');

// Agrega un event listener para el clic
texto.addEventListener('click', function() {
    // Crea un elemento de texto oculto
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = texto.innerText;

    // Añade el elemento al DOM
    document.body.appendChild(elementoTemporal);

    // Selecciona el contenido del elemento temporal
    elementoTemporal.select();
    elementoTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand('copy');

    // Elimina el elemento temporal
    document.body.removeChild(elementoTemporal);
});