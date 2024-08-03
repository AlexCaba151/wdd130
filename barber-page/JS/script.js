// Espera a que todo el contenido del DOM se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene los elementos del DOM usando sus IDs
    const hideSidebarButton = document.getElementById('hideSidebar');
    const showSidebarButton = document.getElementById('showSidebar');
    const sidebar = document.getElementById('sidebar');

    // Agrega un evento de clic al botón de ocultar el sidebar
    hideSidebarButton.addEventListener('click', () => {
        // Verifica si el elemento sidebar existe
        if (sidebar) {
            // Cambia el estilo display del sidebar a 'none' para ocultarlo
            sidebar.style.display = 'none';
        }
    });

    // Agrega un evento de clic al botón de mostrar el sidebar
    showSidebarButton.addEventListener('click', () => {
        // Verifica si el elemento sidebar existe
        if (sidebar) {
            // Cambia el estilo display del sidebar a 'flex' para mostrarlo
            sidebar.style.display = 'flex';
        }
    });
});
