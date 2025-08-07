import { login } from "./js/login.js";

const routes= {
    
}

login()


//Cuando se cambie de "página"
window.addEventListener("hashchange", render);

//Cuando alguien refresque la página
window.addEventListener("DOMContentLoaded", render);


//Agarra el href de la etiqueta <a href> donde se dio click
document.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        if (href !== window.location.hash) {
            window.location.hash = href; //
        }
    }
});


// //Funcion que realiza el cambio de vistas SPA
// function render() {
//     const path = window.location.hash;
//     const route = routes[path];
//     if (route) {
//         route();
//     } else {
//         // Si no se encuentra la ruta
//         document.getElementById("content").innerHTML = "<h1>404 - Página no encontrada</h1>";
//     }
// }



