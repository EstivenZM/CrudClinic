export function doctorsView() {
  const content = document.getElementById("contentDashboard");

  content.innerHTML = `
          <div class="table-responsive">
            <table class="table">
              <thead class="table-light">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Especialidad</th>
                </tr>
              </thead>
              <tbody id="medicosTableBody">
                <!-- Contenido dinámico -->
              </tbody>
            </table>
          </div>
  `;

  // document.getElementById("logout").addEventListener("click", (e) => {
  //   e.preventDefault();
  //   sessionStorage.removeItem("auth");
  //   window.location.hash = "#/";
  // });

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
      <td>${medico.id_medico}</td>
      <td>${medico.nombre}</td>
      <td>${medico.id_especialidad}</td>
    `;
    tbody.appendChild(row);
  });
}
