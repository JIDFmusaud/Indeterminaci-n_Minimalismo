// Verificar si el usuario está autenticado
if (localStorage.getItem('isAuthenticated') !== 'true') {
    // Si no está autenticado, redirigir a la página de inicio
    window.location.href = 'index.html';
}

// Lógica para cerrar sesión
document.getElementById('logout-button').addEventListener('click', () => {
    localStorage.removeItem('isAuthenticated'); // Eliminar el indicador de autenticación
    window.location.href = 'index.html'; // Redirige a la página de inicio
});
