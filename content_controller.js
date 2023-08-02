// Importar los modelos de contenidos para mayores y menores de edad
const adultContentModel = require('./adult_content_model');
const minorContentModel = require('./minor_content_model');

// Función para manejar la visualización de contenidos para mayores de edad
function showAdultContent(req, res) {
  adultContentModel.getAdultContent((error, adultContent) => {
    if (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      // Visualización del contenido para mayores de edad
      res.render('adult_content_view', { content: adultContent });
    }
  });
}

// Función para manejar la visualización de contenidos para menores de edad
function showMinorContent(req, res) {
  minorContentModel.getMinorContent((error, minorContent) => {
    if (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      // Visualización del contenido para menores de edad
      res.render('minor_content_view', { content: minorContent });
    }
  });
}

module.exports = {
  showAdultContent,
  showMinorContent
};
