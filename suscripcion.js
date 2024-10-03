// Función para mostrar el contenido de la pestaña seleccionada
function showTab(plan) {
    // Ocultar todas las secciones de pestañas
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    // Mostrar la pestaña correspondiente al plan seleccionado
    document.getElementById(plan).style.display = 'block';
}
