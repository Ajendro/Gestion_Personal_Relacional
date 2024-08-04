const Authentication = require('../models/authenticationModel');

// Crear una autenticación
exports.createAuthentication = (req, res) => {
  const { password, email, fk_idUser } = req.body;
  Authentication.createAuthentication(password, email, fk_idUser, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, password, email, fk_idUser });
  });
};

// Obtener todas las autenticaciones
exports.getAllAuthentications = (req, res) => {
  Authentication.getAllAuthentications((err, authentications) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(authentications);
  });
};

// Obtener una autenticación por ID
exports.getAuthenticationById = (req, res) => {
  const { id } = req.params;
  Authentication.getAuthenticationById(id, (err, authentication) => {
    if (err) return res.status(500).send(err);
    if (!authentication) return res.status(404).json({ message: 'Authentication not found' });
    res.status(200).json(authentication);
  });
};

// Actualizar una autenticación
exports.updateAuthentication = (req, res) => {
  const { id } = req.params;
  const { password, email } = req.body;
  Authentication.updateAuthentication(id, password, email, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Authentication not found' });
    res.status(200).json({ message: 'Authentication updated successfully' });
  });
};

// Eliminar una autenticación
exports.deleteAuthentication = (req, res) => {
  const { id } = req.params;
  Authentication.deleteAuthentication(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Authentication not found' });
    res.status(200).json({ message: 'Authentication deleted successfully' });
  });
};
