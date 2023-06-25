document.addEventListener('DOMContentLoaded', function () {
    const configuraciones = document.querySelectorAll('.configuracion');

    configuraciones.forEach(configuracion => {
        configuracion.addEventListener('click', function () {
            alert('Haz hecho clic en una configuración de computador.');
        });
    });
});