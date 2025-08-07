export function doctorsView() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <nav class="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
          <div class="position-sticky pt-3">
            <div class="text-center py-4 border-bottom border-secondary">
              <h4 class="text-white">Crud Clinic</h4>
            </div>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link text-white" href="#/dashboard/pacientes">
                  <i class="bi bi-person-circle me-2"></i> Pacientes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#/dashboard/citas">
                  <i class="bi bi-calendar-event me-2"></i> Citas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white active" href="#/dashboard/medicos">
                  <i class="bi bi-heart-pulse me-2"></i> Médicos
                </a>
              </li>
              <li class="nav-item mt-4">
                <a class="nav-link text-danger" href="#" id="logout">
                  <i class="bi bi-box-arrow-right me-2"></i> Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <!-- Main content -->
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Listado de Médicos</h1>
          </div>

          <div class="table-responsive">
            <table class="table table-striped table-bordered">
              <thead class="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Especialidad</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody id="medicosTableBody">
                <!-- Contenido dinámico -->
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  `;

  document.getElementById("logout").addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.removeItem("auth");
    window.location.hash = "#/";
  });

  loadMedicos();
}

async function loadMedicos() {
  try {
    const response = await fetch("http://localhost:3000/medicos");
    const medicos = await response.json();
    renderMedicosTable(medicos);
  } catch (error) {
    console.error("Error cargando médicos:", error);
    alert("Error al cargar los médicos.");
  }
}

function renderMedicosTable(medicos) {
  const tbody = document.getElementById("medicosTableBody");
  tbody.innerHTML = "";

  medicos.forEach((medico) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${medico.id}</td>
      <td>${medico.nombre}</td>
      <td>${medico.apellido}</td>
      <td>${medico.especialidad}</td>
      <td>${medico.email}</td>
      <td>${medico.telefono || "N/A"}</td>
    `;
    tbody.appendChild(row);
  });
}
