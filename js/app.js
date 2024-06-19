document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleButton');
    const modeIcon = document.getElementById('modeIcon');
    const navbar = document.querySelector('nav');
    const sections = document.querySelectorAll('section');

    function applyMode(mode) {
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            navbar.classList.add('navbar-dark-mode');
            navbar.classList.remove('navbar-light-mode');
            sections.forEach(section => {
                section.classList.add('dark-mode');
                section.classList.remove('light-mode');
            });
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            navbar.classList.add('navbar-light-mode');
            navbar.classList.remove('navbar-dark-mode');
            sections.forEach(section => {
                section.classList.add('light-mode');
                section.classList.remove('dark-mode');
            });
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        }
    }

    // Cargar la preferencia del usuario desde localStorage
    const savedMode = localStorage.getItem('mode') || 'light';
    applyMode(savedMode);

    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del botón
        const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        applyMode(newMode);
        // Guardar la nueva preferencia en localStorage
        localStorage.setItem('mode', newMode);
    });
});