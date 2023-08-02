// Importar la biblioteca de base de datos (ejemplo: MySQL)
const mysql = require('mysql');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario_bd',
  password: 'contraseña_bd',
  database: 'nombre_bd'
});

// Función para obtener el contenido para mayores de edad
function getAdultContent(callback) {
  const query = 'SELECT * FROM info_pagina WHERE edad_requerida >= 18';
  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results); // Devuelve el contenido para mayores de edad
    }
  });
}

module.exports = {
  getAdultContent
};
