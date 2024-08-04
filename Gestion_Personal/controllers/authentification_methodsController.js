const AuthenticationMethods = require('../models/authentication_methodsModel');

// Crear un método de autenticación
exports.createAuthenticationMethod = (req, res) => {
    const { name, description, fk_idAuthentication, _fk_idUser } = req.body;
    Categories.createAuthenticationMethod(name, description, fk_idAuthentication, _fk_idUser, (err, id) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id, name, description, fk_idAuthentication, _fk_idUser });
    });
  };
  
  // Obtener todos los métodos de autenticación
  exports.getAllAuthenticationMethods = (req, res) => {
    Categories.getAllAuthenticationMethods((err, methods) => {
      if (err) return res.status(500).send(err);
      res.status(200).json(methods);
    });
  };
  
  // Obtener un método de autenticación por ID
  exports.getAuthenticationMethodById = (req, res) => {
    const { idAuthentication, _fk_idUser } = req.params;
    Categories.getAuthenticationMethodById(idAuthentication, _fk_idUser, (err, method) => {
      if (err) return res.status(500).send(err);
      if (!method) return res.status(404).json({ message: 'Authentication method not found' });
      res.status(200).json(method);
    });
  };
  
  // Actualizar un método de autenticación
  exports.updateAuthenticationMethod = (req, res) => {
    const { idAuthentication, _fk_idUser } = req.params;
    const { name, description } = req.body;
    Categories.updateAuthenticationMethod(idAuthentication, _fk_idUser, name, description, (err, affectedRows) => {
      if (err) return res.status(500).send(err);
      if (affectedRows === 0) return res.status(404).json({ message: 'Authentication method not found' });
      res.status(200).json({ message: 'Authentication method updated successfully' });
    });
  };
  
  // Eliminar un método de autenticación
  exports.deleteAuthenticationMethod = (req, res) => {
    const { idAuthentication, _fk_idUser } = req.params;
    Categories.deleteAuthenticationMethod(idAuthentication, _fk_idUser, (err, affectedRows) => {
      if (err) return res.status(500).send(err);
      if (affectedRows === 0) return res.status(404).json({ message: 'Authentication method not found' });
      res.status(200).json({ message: 'Authentication method deleted successfully' });
    });
  };
  