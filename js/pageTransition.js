document.addEventListener('DOMContentLoaded', function() {
    // Hacemos fade in después de cargar la página
    setTimeout(function() {
        document.body.style.opacity = 1;
    }, 50); // Esperamos 100ms antes de hacer el fade in
});

// Función para hacer fade out y navegar a la nueva página
function fadeOutAndNavigate(event, url) {
    event.preventDefault(); // Evitamos que el enlace funcione de forma predeterminada
    document.body.style.opacity = 0; // Cambiamos la opacidad a 0 para el fade out
    setTimeout(function() {
        window.location.href = url; // Redirigimos a la nueva página después del fade out
    }, 300); // Esperamos 500ms (0.5s) antes de redirigir
}