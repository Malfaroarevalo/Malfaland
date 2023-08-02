-- Crear la tabla de noticias
CREATE TABLE noticias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  contenido TEXT NOT NULL,
  autor VARCHAR(50) NOT NULL,
  fecha_publicacion DATE NOT NULL
);
