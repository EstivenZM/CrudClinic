import express from 'express';
import { createConnection } from 'mysql2/promise';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import csv from 'csv-parser';
import multer from 'multer';
import path from 'path';
dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


// Configurar multer para manejar archivos temporales

// Conexión a la base de datos
async function connectionBD() {
    return await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT || 3306
    });
}
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

// ---------------------------------- MEDICOS -------------------------------------
app.get('/medicos', async (req, res) => {
    let connection = await connectionBD()
    let [filas] = await connection.execute(`SELECT * FROM medicos`)
    await connection.end()
    res.json(filas)
})




// ---------------------------------- CITAS -------------------------------------
app.get('/citas', async (req, res) => {
    let connection = await connectionBD()
    let [filas] = await connection.execute(`SELECT * FROM citas`)
    await connection.end()
    res.json(filas)
})



app.post('/citas', async (req, res) => {
    try {
        const {  } = req.body;
        if (!fecha || !hora || !paciente_id || !doctor_id || !motivo) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        const connection = await connectionBD();
        const query = `
            INSERT INTO citas (fecha, hora, paciente_id, doctor_id, motivo)
            VALUES (?, ?, ?, ?, ?)
        `;
        const [result] = await connection.execute(query, [fecha, hora, paciente_id, doctor_id, motivo]);
        await connection.end();

        res.status(201).json({ message: 'Cita creada exitosamente', citaId: result.insertId });
    } catch (error) {
        console.error('Error al crear la cita:', error);
        res.status(500).json({ error: 'Error al crear la cita' });
    }
});




// ---------------------------------- PACIENTES -------------------------------------
app.get('/pacientes', async (req, res) => {
    let connection = await connectionBD()
    let [filas] = await connection.execute(`SELECT * FROM pacientes`)
    await connection.end()
    res.json(filas)
})




// ---------------------------------- ADMIN -------------------------------------
app.get('/admin', async (req, res) => {
    let connection = await connectionBD()
    let [filas] = await connection.execute(`SELECT * FROM admin`)
    await connection.end()
    res.json(filas)
})







