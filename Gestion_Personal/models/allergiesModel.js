const db = require('../conexion/conexion');

// Function to create a new allergy
const createAllergy = (name, description, severity, fk_idHealth, callback) => {
  const query = 'INSERT INTO Allergies (name, description, severity, fk_idHealth) VALUES (?, ?, ?, ?)';
  db.query(query, [name, description, severity, fk_idHealth], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all allergies
const getAllAllergies = (callback) => {
  const query = 'SELECT * FROM Allergies';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get an allergy by ID
const getAllergyById = (idAllergies, callback) => {
  const query = 'SELECT * FROM Allergies WHERE idAllergies = ?';
  db.query(query, [idAllergies], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update an allergy
const updateAllergy = (idAllergies, name, description, severity, fk_idHealth, callback) => {
  const query = 'UPDATE Allergies SET name = ?, description = ?, severity = ?, fk_idHealth = ? WHERE idAllergies = ?';
  db.query(query, [name, description, severity, fk_idHealth, idAllergies], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete an allergy
const deleteAllergy = (idAllergies, callback) => {
  const query = 'DELETE FROM Allergies WHERE idAllergies = ?';
  db.query(query, [idAllergies], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createAllergy,
  getAllAllergies,
  getAllergyById,
  updateAllergy,
  deleteAllergy
};
