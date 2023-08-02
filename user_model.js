// Importar la biblioteca de base de datos (ejemplo: MySQL)
const mysql = require('mysql');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario_bd',
  password: 'contraseña_bd',
  database: 'nombre_bd'
});

// Función para validar el nombre de usuario y contraseña
function validateUser(username, password, callback) {
  const query = 'SELECT * FROM usuarios WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.length > 0); // True si hay coincidencias, false si no hay coincidencias
    }
  });
}

// Función para crear un nuevo usuario
function createUser(username, email, password, callback) {
  const query = 'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)';
  connection.query(query, [username, email, password], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.insertId); // ID del usuario recién creado
    }
  });
}

module.exports = {
  validateUser,
  createUser
};
