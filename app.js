import createAuth0Client from "@auth0/auth0-spa-js";

let auth0Client;

// Inicializa Auth0
const initAuth0 = async () => {
    auth0Client = await createAuth0Client({
        domain: "dev-b4clseumhkg1tdd3.us.auth0.com", // Corregido: quitar https://
        client_id: "noxrIEup1Kx62gRSnT6o4j9LniCUhzB7",
        redirect_uri: "https://musicasxx.netlify.app/indeterminismo" // URL correcta
    });
};

// Ejecutar la inicialización
initAuth0();

// Función de login
const login = async () => {
    await auth0Client.loginWithRedirect();
};

// Función de logout
const logout = () => {
    auth0Client.logout({
        returnTo: "https://musicasxx.netlify.app/" // URL de retorno después del logout
    });
};

// Unificar window.onload
window.onload = async () => {
    await initAuth0(); // Asegúrate de que Auth0 esté inicializado correctamente
    
    const isAuthenticated = await auth0Client.isAuthenticated();

    if (isAuthenticated) {
        const user = await auth0Client.getUser();
        document.getElementById('user-info').innerText = `Bienvenido, ${user.name}`;
        
        // Ocultar el botón de inicio de sesión y mostrar el de cerrar sesión
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('logout-button').style.display = 'block';
    } else {
        // Si el usuario no está autenticado, muestra el botón de login
        document.getElementById('login-button').style.display = 'block';
        document.getElementById('logout-button').style.display = 'none';
    }
};

// Asigna eventos a los botones
document.getElementById('login-button').addEventListener('click', login);
document.getElementById('logout-button').addEventListener('click', logout);
