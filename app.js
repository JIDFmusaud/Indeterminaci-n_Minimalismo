import createAuth0Client from '@auth0/auth0-spa-js';

let auth0Client;

const initAuth0 = async () => {
    auth0Client = await createAuth0Client({
        domain: 'TU_DOMINIO.auth0.com', // Reemplaza con tu dominio de Auth0
        client_id: 'TU_CLIENT_ID',       // Reemplaza con tu client ID de Auth0
        redirect_uri: window.location.origin // URL donde redirigir después del login
    });
};

initAuth0();


const login = async () => {
    await auth0Client.loginWithRedirect();
};

const logout = () => {
    auth0Client.logout({
        returnTo: window.location.origin // URL donde redirigir después del logout
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