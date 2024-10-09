// Contraseña fija para el ejemplo
const correctPassword = 'ETMIV2024'; // Cambia esto por la contraseña que quieras

const loginButton = document.getElementById('login-button');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginButton.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Si la contraseña es correcta, almacena el estado de sesión y redirige a una nueva página
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'menu.html'; // Cambia a la URL de tu página protegida
    } else {
        // Si la contraseña es incorrecta, muestra un mensaje de error
        errorMessage.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
    }
});

