const db = require('../conexion/conexion');

// Function to create a user
const createUser = (name, registration_date, birth_date, fk_idCategory, callback) => {
  const query = 'INSERT INTO User (name, registration_date, birth_date, fk_idCategory) VALUES (?, ?, ?, ?)';
  db.query(query, [name, registration_date, birth_date, fk_idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all users
const getAllUsers = (callback) => {
  const query = 'SELECT * FROM User';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get a user by ID
const getUserById = (id, callback) => {
  const query = 'SELECT * FROM User WHERE idUser = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update a user
const updateUser = (id, name, registration_date, birth_date, fk_idCategory, callback) => {
  const query = 'UPDATE User SET name = ?, registration_date = ?, birth_date = ?, fk_idCategory = ? WHERE idUser = ?';
  db.query(query, [name, registration_date, birth_date, fk_idCategory, id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete a user
const deleteUser = (id, callback) => {
  const query = 'DELETE FROM User WHERE idUser = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
