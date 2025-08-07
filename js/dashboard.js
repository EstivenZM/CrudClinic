
export function dashboard() {
    const dashboard = document.getElementById("content");
    dashboard.innerHTML = `
        
        <nav class="sidebar d-flex flex-column">
            <div class="text-center py-4 border-bottom">
            <h4 class="text-white">Clínica Salud</h4>
            </div>
            <a href="#/dashboard/pacientes" class="active"><i class="bi bi-person"></i> Pacientes</a>
            <a href="#/dashboard/citas"><i class="bi bi-calendar-event"></i> Citas</a>
            <a href="#/dashboard/medicos"><i class="bi bi-heart-pulse"></i> Médicos</a>
            <a class="nav-link text-danger" href="#" id="logout"></a>
        </nav>

        <!-- Content -->
        <div class="content">
            <h2>Bienvenido al Panel de Administración</h2>
            <p>Selecciona una opción del menú para comenzar.</p>
        </div>`;

    // Agregar funcionalidad de logout
    document.getElementById("logout").addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.removeItem("auth");
        window.location.hash = "#/";
    });
}

