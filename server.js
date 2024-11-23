const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configurar conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia esto según tu configuración
  password: '123456', // Cambia esto según tu configuración
  database: 'encuestadb'
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Middleware
app.use(bodyParser.json());
app.use(express.static('docs'));

// Ruta para guardar respuestas en la base de datos
app.post('/submit-survey', (req, res) => {
  const { respuesta } = req.body;

  const query = 'INSERT INTO Respuestas (respuesta) VALUES (?)';
  db.query(query, [respuesta], (err, results) => {
    if (err) {
      console.error('Error al guardar en la base de datos:', err);
      res.status(500).json({ message: 'Error al guardar la respuesta.' });
      return;
    }
    res.status(200).json({ message: 'Respuesta guardada correctamente.' });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
