export async function citas() {
    const content = document.getElementById("content");
    content.innerHTML += `
        <div class="container mt-5">
            <h2 class="mb-4">Lista de Citas</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Paciente</th>
                            <th>Médico</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody id="citasTableBody"></tbody>
                </table>
            </div>
        </div>`;

    await loadCitas();
}

async function loadCitas() {
    try {
        const response = await fetch("http://localhost:3000/citas");
        const citas = await response.json();
        renderCitasTable(citas);
    } catch (error) {
        console.error("Error cargando citas:", error);
    }
}

// function renderCitasTable(citas) {
//     const tbody = document.getElementById("citasTableBody");
//     tbody.innerHTML = "";

//     citas.forEach(cita => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${cita.id}</td>
//             <td>${cita.paciente_nombre || 'N/A'}</td>
//             <td>${cita.medico_nombre || 'N/A'}</td>
//             <td>${formatDate(cita.fecha)}</td>
//             <td>${cita.hora}</td>
//             <td><span class="badge bg-${cita.estado}">${cita.estado}</span></td>
//             <td>
//                 <button class="btn btn-sm btn-outline-primary me-1" onclick="editCita(${cita.id})">
//                     <i class="bi bi-pencil"></i>
//                 </button>
//                 <button class="btn btn-sm btn-outline-danger" onclick="deleteCita(${cita.id})">
//                     <i class="bi bi-trash"></i>
//                 </button>
//             </td>
//         `;
//         tbody.appendChild(row);
//     });
// }


function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES');
}

async function editCita(id) {
    console.log(`Editar cita con ID: ${id}`);
    // Lógica futura o redirección
}

async function deleteCita(id) {
    if (confirm("¿Estás seguro de que quieres eliminar esta cita?")) {
        try {
            const response = await fetch(`http://localhost:3000/citas/${id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                alert("Cita eliminada exitosamente");
                await loadCitas();
            } else {
                throw new Error("Error en la respuesta del servidor");
            }
        } catch (error) {
            console.error("Error eliminando cita:", error);
        }
    }
}

window.editCita = editCita;
window.deleteCita = deleteCita;
