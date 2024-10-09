import createAuth0Client from '@auth0/auth0-spa-js';

let auth0Client;

const initAuth0 = async () => {
    auth0Client = await createAuth0Client({
        domain: 'https://dev-b4clseumhkg1tdd3.us.auth0.com', // Reemplaza con tu dominio de Auth0
        client_id: 'noxrIEup1Kx62gRSnT6o4j9LniCUhzB7',       // Reemplaza con tu client ID de Auth0
        redirect_uri: "https://musicasxx.netlify.app/minimalismo" // URL donde redirigir después del login
    });
};

initAuth0();


const login = async () => {
    await auth0Client.loginWithRedirect();
};

const logout = () => {
    auth0Client.logout({
        returnTo: "https://www.google.co.uk/"// URL donde redirigir después del logout
    });
};

document.getElementById('login-button').addEventListener('click', login);
document.getElementById('logout-button').addEventListener('click', logout);


window.onload = async () => {
    const isAuthenticated = await auth0Client.isAuthenticated();

    if (isAuthenticated) {
        const user = await auth0Client.getUser();
        document.getElementById('user-info').innerText = `Bienvenido, ${user.name}`;
    } else {
        await auth0Client.handleRedirectCallback();
    }
};





window.onload = async () => {
    const isAuthenticated = await auth0Client.isAuthenticated();

    if (isAuthenticated) {
        const user = await auth0Client.getUser();
        document.getElementById('user-info').innerText = `Bienvenido, ${user.name}`;
        
        // Ocultar el botón de inicio de sesión y mostrar el de cerrar sesión
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('logout-button').style.display = 'block';
    } else {
        await auth0Client.handleRedirectCallback();
    }
};