const db = require('../conexion/conexion');

// Create a new health record
const createHealthRecord = (registration_date, weight, heart_rate, fk_idUser, callback) => {
  const query = 'INSERT INTO Health (registration_date, weight, heart_rate, fk_idUser) VALUES (?, ?, ?, ?)';
  db.query(query, [registration_date, weight, heart_rate, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Get all health records
const getAllHealthRecords = (callback) => {
  const query = 'SELECT * FROM Health';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Get a health record by ID
const getHealthRecordById = (idHealth, callback) => {
  const query = 'SELECT * FROM Health WHERE idHealth = ?';
  db.query(query, [idHealth], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Update a health record
const updateHealthRecord = (idHealth, registration_date, weight, heart_rate, callback) => {
  const query = 'UPDATE Health SET registration_date = ?, weight = ?, heart_rate = ? WHERE idHealth = ?';
  db.query(query, [registration_date, weight, heart_rate, idHealth], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Delete a health record
const deleteHealthRecord = (idHealth, callback) => {
  const query = 'DELETE FROM Health WHERE idHealth = ?';
  db.query(query, [idHealth], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createHealthRecord,
  getAllHealthRecords,
  getHealthRecordById,
  updateHealthRecord,
  deleteHealthRecord
};
