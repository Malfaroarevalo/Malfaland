// Importar la biblioteca de base de datos (ejemplo: MySQL)
const mysql = require('mysql');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario_bd',
  password: 'contraseña_bd',
  database: 'nombre_bd'
});

// Función para crear una nueva noticia
function createNews(title, content, author, date, callback) {
  const query = 'INSERT INTO noticias (titulo, contenido, autor, fecha_publicacion) VALUES (?, ?, ?, ?)';
  connection.query(query, [title, content, author, date], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.insertId); // ID de la noticia recién creada
    }
  });
}

// Función para obtener todas las noticias
function getAllNews(callback) {
  const query = 'SELECT * FROM noticias';
  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results); // Devuelve todas las noticias
    }
  });
}

// Función para actualizar una noticia
function updateNews(id, title, content, author, date, callback) {
  const query = 'UPDATE noticias SET titulo = ?, contenido = ?, autor = ?, fecha_publicacion = ? WHERE id = ?';
  connection.query(query, [title, content, author, date, id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.affectedRows); // Número de filas actualizadas
    }
  });
}

// Función para eliminar una noticia
function deleteNews(id, callback) {
  const query = 'DELETE FROM noticias WHERE id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.affectedRows); // Número de filas eliminadas
    }
  });
}

module.exports = {
  createNews,
  getAllNews,
  updateNews,
  deleteNews
};
