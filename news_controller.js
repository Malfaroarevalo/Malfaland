// Importar el modelo de gestión de noticias
const newsModel = require('./news_model');

// Función para manejar la visualización de todas las noticias
function showAllNews(req, res) {
  newsModel.getAllNews((error, allNews) => {
    if (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      // Visualización de todas las noticias
      res.render('news_view', { newsList: allNews });
    }
  });
}

// Función para manejar la creación de una nueva noticia
function createNews(req, res) {
  const { titulo, contenido, autor, fecha } = req.body;

  newsModel.createNews(titulo, contenido, autor, fecha, (error, newsId) => {
    if (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      // Noticia creada exitosamente
      res.status(201).json({ message: 'Noticia creada exitosamente', newsId });
    }
  });
}

// Función para manejar la actualización de una noticia
function updateNews(req, res) {
  const { id, titulo, contenido, autor, fecha } = req.body;

  newsModel.updateNews(id, titulo, contenido, autor, fecha, (error, rowsAffected) => {
    if (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      // Noticia actualizada exitosamente
      res.status(200).json({ message: 'Noticia actualizada exitosamente', rowsAffected });
    }
  });
}

// Función para manejar la eliminación de una noticia
function deleteNews(req, res) {
  const { id } = req.params;

  newsModel.deleteNews(id, (error, rowsAffected) => {
    if (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      // Noticia eliminada exitosamente
      res.status(200).json({ message: 'Noticia eliminada exitosamente', rowsAffected });
    }
  });
}

module.exports = {
  showAllNews,
  createNews,
  updateNews,
  deleteNews
};
