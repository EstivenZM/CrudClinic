export async function getPatients() {
    try {
        const response = await fetch("http://localhost:3000/pacientes");
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error en GET:", error);
    }
}


export async function viewClients() {
    let content = document.getElementById("contentDashboard")
    content.innerHTML = `
    <div class="w-100 d-flex justify-content-end">
        <button class="btn btn-primary" type="button">Crear paciente</button>
    </div>
    <div class="container mt-5">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre completo</th>
                <th scope="col">Correo</th>
                </tr>
            </thead>
            <tbody id="tbody">

            </tbody>
        </table>
    </div>`

    let tbody = document.getElementById("tbody")
    let data = await getPatients()
    data.forEach(client => {
        tbody.innerHTML += `    
    <tr>
      <th>${client.id_paciente}</th>
      <td>${client.nombre_completo}</td>
      <td>${client.correo}</td>
    </tr>`
    });
}







export async function get() {
    try {
        const response = await fetch("http://localhost:3000/clientes");
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error en GET:", error);
    }
}