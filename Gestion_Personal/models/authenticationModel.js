
const db = require('../conexion/conexion');

// Función para crear una autenticación
const createAuthentication = (password, email, fk_idUser, callback) => {
  const query = 'INSERT INTO Authentication (password, email, fk_idUser) VALUES (?, ?, ?)';
  db.query(query, [password, email, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Función para obtener todas las autenticaciones
const getAllAuthentications = (callback) => {
  const query = 'SELECT * FROM Authentication';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener una autenticación por ID
const getAuthenticationById = (id, callback) => {
  const query = 'SELECT * FROM Authentication WHERE idAuthentication = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Función para actualizar una autenticación
const updateAuthentication = (id, password, email, callback) => {
  const query = 'UPDATE Authentication SET password = ?, email = ? WHERE idAuthentication = ?';
  db.query(query, [password, email, id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Función para eliminar una autenticación
const deleteAuthentication = (id, callback) => {
  const query = 'DELETE FROM Authentication WHERE idAuthentication = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createAuthentication,
  getAllAuthentications,
  getAuthenticationById,
  updateAuthentication,
  deleteAuthentication
};
