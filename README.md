# 🏥 CrudClinic

CrudClinic es una aplicación web para la **gestión de la agenda médica de una clínica**, que permite administrar doctores, pacientes y citas médicas de forma sencilla y eficiente.  
El proyecto incluye un **frontend** desarrollado con HTML, CSS y JavaScript, y un **backend** con Node.js y Express para manejar las operaciones CRUD y la carga masiva de datos.

---

## 🚀 Características principales

- **Gestión de doctores**: agregar, editar, eliminar y listar doctores.
- **Gestión de pacientes**: registrar, modificar, eliminar y consultar pacientes.
- **Gestión de citas**: agendar, actualizar y cancelar citas médicas.
- **Autenticación**: inicio de sesión de usuarios autorizados.
- **Dashboard**: visualización de datos clave de la clínica.
- **Carga masiva**: importar información desde archivos CSV/XLSX.
- **Backend con API REST**: construido en Node.js y Express.
- **Frontend responsivo**: HTML, CSS y JavaScript.

---

## 🛠️ Tecnologías utilizadas

### **Frontend**
- HTML
- CSS
- JavaScript (módulos para cada sección: citas, pacientes, doctores, login, dashboard)

### **Backend**
- Node.js
- Express
- Body-parser
- Cors

---

## 📂 Estructura del proyecto

<img width="538" height="428" alt="image" src="https://github.com/user-attachments/assets/eeec98a5-7eea-4a6a-a411-faeee7edb0f1" />

    
⚙️ Instalación y configuración
1️⃣ Clonar el repositorio
bash
Copiar
Editar
git clone https://github.com/usuario/CrudClinic.git
cd CrudClinic-main
2️⃣ Instalar dependencias del backend
cd CrudClinicBACKEND
npm install
3️⃣ Configurar variables de entorno
Crear un archivo .env en la carpeta CrudClinicBACKEND con la configuración de conexión a la base de datos y el puerto:

El servidor estará disponible en:
http://localhost:3000

# 5️⃣ Abrir el frontend
Abrir el archivo index.html en el navegador o servirlo con Live Server.

📌 Endpoints principales (Backend API)
Método	Endpoint	Descripción
GET	/doctors	Listar doctores
POST	/doctors	Agregar doctor
PUT	/doctors/:id	Editar doctor
DELETE	/doctors/:id	Eliminar doctor
GET	/patients	Listar pacientes
POST	/patients	Registrar paciente
PUT	/patients/:id	Editar paciente
DELETE	/patients/:id	Eliminar paciente
GET	/citas	Listar citas
POST	/citas	Agendar cita
PUT	/citas/:id	Editar cita
DELETE	/citas/:id	Cancelar cita

🖥️ Uso
Inicia sesión como usuario autorizado (Admin).

Accede al Dashboard para ver la información general.

Desde el menú, selecciona la sección a administrar:

Doctores: gestionar el personal médico.

Pacientes: gestionar información de pacientes.

Citas: agendar, modificar o cancelar citas.

Si es necesario, importa datos masivamente desde un archivo CSV.

