-- Crear la tabla de información de página
CREATE TABLE info_pagina (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  contenido TEXT NOT NULL,
  tipo VARCHAR(50) NOT NULL
);
