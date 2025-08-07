import { login } from "./js/login.js";
import { dashboard } from "./js/dashboard.js";
import { citas } from "./js/citas.js";
import { patientsView } from "./js/patients.js";
import { doctorsView } from "./js/doctors.js";

const routes = {
    "#/": login,
    "#/dashboard": dashboard,
    "#/dashboard/citas": citas, 
    "#/dashboard/pacientes": patientsView,
    "#/dashboard/medicos": doctorsView
}

// Función que realiza el cambio de vistas SPA
function render() {
    const path = window.location.hash;
    const route = routes[path];
    
    // Verificar autenticación para rutas protegidas
    const isAuthenticated = sessionStorage.getItem("auth") === "true";
    const isProtectedRoute = path.includes("/dashboard");
    
    if (isProtectedRoute && !isAuthenticated) {
        window.location.hash = "#/";
        return;
    }
    
    if (route) {
        route();
    } else {
        // Si no se encuentra la ruta
        document.getElementById("content").innerHTML = "<h1>404 - Página no encontrada</h1>";
    }
}

// Cuando se cambie de "página"
window.addEventListener("hashchange", render);

// Cuando alguien refresque la página
window.addEventListener("DOMContentLoaded", render);

// Agarra el href de la etiqueta <a href> donde se dio click
document.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        if (href !== window.location.hash) {
            window.location.hash = href;
        }
    }
});

// Renderizar la página inicial
render();



