
export function dashboard() {
    const content = document.getElementById("content");
    content.setAttribute("class","row w-100 h-100")
    content.innerHTML = `
        <aside class="col-md-2 vh-100 aside-container shadow p-5 d-flex flex-column">
            <h3>Crud Clinic</h3>

            <div class="aside-content mt-5">
                <ul class="list-unstyled d-flex flex-column gap-5">
                    <li><a class="text-decoration-none btn btn-light" href="#/dashboard/citas">Citas</a></li>
                    <li><a class="text-decoration-none btn btn-light" href="#/dashboard/pacientes">Pacientes</a></li>
                    <li><a class="text-decoration-none btn btn-light" href="#/dashboard/medicos">Médicos</a></li>
                </ul>
            </div>


            <div class="aside-button mt-auto">
                <button class="btn btn-primary" id="logout">Cerrar sesión</button>
            </div>
        </aside>
        <div class="col-md-10 vh-100 p-5 overflow-y-auto" id="contentDashboard">

        </div>
        `;

    document.getElementById("logout").addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.removeItem("auth");
        window.location.hash=""
    });
}

