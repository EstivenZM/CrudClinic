export function login() {
    let content = document.getElementById("content")
    content.innerHTML = `        
        <div class="container vh-100 vw-100 d-flex justify-content-center align-items-center">
            <form class="p-4 rounded-2 shadow">
                <div class="text-center mb-4">
                    <h3>CrudClinic</h3>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password">
                </div>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" id="buttonLogin">Ingresar</button>
                </div>
                <div class="mt-2" id="alert"><div>
            </form>
        </div>`


    let buttonLogin = document.getElementById("buttonLogin")

    buttonLogin.addEventListener("click", async (e) => {
        e.preventDefault()
        let alert = document.getElementById("alert")
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let search = await searchAdmin()
        console.log(search);

        //Found sera igual al usuario que coincida con lo ingresado en los inputs
        const found = search.find(admin => admin.correo == email && admin.contrasena == password)


        if(found){
            sessionStorage.setItem("auth", "true")
            window.location.hash ="#/dashboard"
            console.log("Inicio sesion")

        } else{
            alert.style="color: red"
            alert.innerHTML="Usuario no encontrado"
            
        }

    })



    async function searchAdmin() {
        try {
            const response = await fetch("http://localhost:3000/administrador");
            const data = await response.json();
            return data
        } catch (error) {
            console.error("Error en GET:", error);
        }
    }
}