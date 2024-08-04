const db = require('../conexion/conexion');

// Función para crear una integración
const createIntegration = (token, date_expire, fk_idUser, fk_idCategory, callback) => {
  const query = 'INSERT INTO Integration (token, date_expire, fk_idUser, fk_idCategory) VALUES (?, ?, ?, ?)';
  db.query(query, [token, date_expire, fk_idUser, fk_idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Función para obtener todas las integraciones
const getAllIntegrations = (callback) => {
  const query = 'SELECT * FROM Integration';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener una integración por ID
const getIntegrationById = (idIntegration, callback) => {
  const query = 'SELECT * FROM Integration WHERE idIntegration = ?';
  db.query(query, [idIntegration], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Función para actualizar una integración
const updateIntegration = (idIntegration, token, date_expire, fk_idUser, fk_idCategory, callback) => {
  const query = 'UPDATE Integration SET token = ?, date_expire = ?, fk_idUser = ?, fk_idCategory = ? WHERE idIntegration = ?';
  db.query(query, [token, date_expire, fk_idUser, fk_idCategory, idIntegration], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Función para eliminar una integración
const deleteIntegration = (idIntegration, callback) => {
  const query = 'DELETE FROM Integration WHERE idIntegration = ?';
  db.query(query, [idIntegration], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createIntegration,
  getAllIntegrations,
  getIntegrationById,
  updateIntegration,
  deleteIntegration
};
