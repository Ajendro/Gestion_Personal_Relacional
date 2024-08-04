const db = require('../conexion/conexion');
// Función para crear un método de autenticación
const createAuthenticationMethod = (name, description, fk_idAuthentication, _fk_idUser, callback) => {
  // Use default values for optional fields if needed
  const query = 'INSERT INTO Authentication_methods (name, description, fk_idAuthentication, _fk_idUser) VALUES (?, ?, ?, ?)';
  db.query(query, [name, description || null, fk_idAuthentication, _fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Función para obtener todos los métodos de autenticación
const getAllAuthenticationMethods = (callback) => {
  const query = 'SELECT * FROM Authentication_methods';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener un método de autenticación por ID
const getAuthenticationMethodById = (idAuthentication, _fk_idUser, callback) => {
  const query = 'SELECT * FROM Authentication_methods WHERE fk_idAuthentication = ? AND _fk_idUser = ?';
  db.query(query, [idAuthentication, _fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Función para actualizar un método de autenticación
const updateAuthenticationMethod = (idAuthentication, _fk_idUser, name, description, callback) => {
  const query = 'UPDATE Authentication_methods SET name = ?, description = ? WHERE fk_idAuthentication = ? AND _fk_idUser = ?';
  db.query(query, [name, description || null, idAuthentication, _fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Función para eliminar un método de autenticación
const deleteAuthenticationMethod = (idAuthentication, _fk_idUser, callback) => {
  const query = 'DELETE FROM Authentication_methods WHERE fk_idAuthentication = ? AND _fk_idUser = ?';
  db.query(query, [idAuthentication, _fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createAuthenticationMethod,
  getAllAuthenticationMethods,
  getAuthenticationMethodById,
  updateAuthenticationMethod,
  deleteAuthenticationMethod
};
