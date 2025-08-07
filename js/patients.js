export async function newPatient(body) {
    try {
        const res = await fetch("http://localhost:3000/patients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    } catch (error) {
        console.error("ERROR AL MANDAR PACIENTE", error)
    }
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