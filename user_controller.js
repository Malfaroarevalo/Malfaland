// Importar el modelo de usuarios
const userModel = require('./user_model');

// Función para manejar el inicio de sesión
function loginUser(req, res) {
  const { username, password } = req.body;

  userModel.validateUser(username, password, (error, isValid) => {
    if (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      if (isValid) {
        // Inicio de sesión exitoso
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        // Credenciales inválidas
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    }
  });
}

// Función para manejar el registro de nuevos usuarios
function registerUser(req, res) {
  const { username, email, password } = req.body;

  userModel.createUser(username, email, password, (error, userId) => {
    if (error) {
      // Manejo del error
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      // Usuario registrado exitosamente
      res.status(201).json({ message: 'Usuario registrado exitosamente', userId });
    }
  });
}

module.exports = {
  loginUser,
  registerUser
};
