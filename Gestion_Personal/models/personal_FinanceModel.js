const db = require('../conexion/conexion');

// Function to create a Personal_Finance entry
const createPersonalFinance = (amount, description, transaction_date, fk_idUser, fk_idCategory, callback) => {
  const query = 'INSERT INTO Personal_Finance (amount, description, transaction_date, fk_idUser, fk_idCategory) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [amount, description, transaction_date, fk_idUser, fk_idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all Personal_Finance entries
const getAllPersonalFinances = (callback) => {
  const query = 'SELECT * FROM Personal_Finance';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get a Personal_Finance entry by ID
const getPersonalFinanceById = (id, callback) => {
  const query = 'SELECT * FROM Personal_Finance WHERE idPersonal_Finance = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update a Personal_Finance entry
const updatePersonalFinance = (id, amount, description, transaction_date, fk_idUser, fk_idCategory, callback) => {
  const query = 'UPDATE Personal_Finance SET amount = ?, description = ?, transaction_date = ?, fk_idUser = ?, fk_idCategory = ? WHERE idPersonal_Finance = ?';
  db.query(query, [amount, description, transaction_date, fk_idUser, fk_idCategory, id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete a Personal_Finance entry
const deletePersonalFinance = (id, callback) => {
  const query = 'DELETE FROM Personal_Finance WHERE idPersonal_Finance = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createPersonalFinance,
  getAllPersonalFinances,
  getPersonalFinanceById,
  updatePersonalFinance,
  deletePersonalFinance
};
