import { login } from "./js/login.js";
import { dashboard } from "./js/dashboard.js";
import { citas } from "./js/citas.js";
import { doctorsView } from "./js/doctors.js";
import { viewClients } from "./js/patients.js"


const routes = {
    "": login,
    "#/dashboard": dashboard,
    "#/dashboard/citas": citas, 
    "#/dashboard/pacientes":viewClients,
    "#/dashboard/medicos": doctorsView
}



// Función que realiza el cambio de vistas SPA
function render() {
    const path = window.location.hash;
    const route = routes[path];
    
    // Verificar autenticación para rutas protegidas
    const isAuthenticated = sessionStorage.getItem("auth") === "true";
    const isProtectedRoute = path.includes("/dashboard");
    
    //Este codigo hace que si la ruta es protegida y el usuario no esta logeado, lo manda para login 
    if (isProtectedRoute && !isAuthenticated) {
        window.location.hash = "";


        //El return evita que se muestre por milisegundos el contendio que no debe mostrarse
        return;
    }
    

    //Si sí hay una funcion asociada a la ruta en la que esta el usuario entonces ejecuta el spa
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



if(sessionStorage.getItem("auth")!="true"){
    routes[""]
}



