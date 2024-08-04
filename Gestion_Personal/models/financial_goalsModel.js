
const db = require('../conexion/conexion');

// Función para crear un objetivo financiero
const createFinancialGoal = (description, target_amount, current_amount, deadline, fk_idUser, callback) => {
  const query = 'INSERT INTO Financial_goals (description, target_amount, current_amount, deadline, fk_idUser) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [description, target_amount, current_amount, deadline, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Función para obtener todos los objetivos financieros
const getAllFinancialGoals = (callback) => {
  const query = 'SELECT * FROM Financial_goals';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener un objetivo financiero por ID
const getFinancialGoalById = (idFinancial_goals, fk_idUser, callback) => {
  const query = 'SELECT * FROM Financial_goals WHERE idFinancial_goals = ? AND fk_idUser = ?';
  db.query(query, [idFinancial_goals, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Función para actualizar un objetivo financiero
const updateFinancialGoal = (idFinancial_goals, fk_idUser, description, target_amount, current_amount, deadline, callback) => {
  const query = 'UPDATE Financial_goals SET description = ?, target_amount = ?, current_amount = ?, deadline = ? WHERE idFinancial_goals = ? AND fk_idUser = ?';
  db.query(query, [description, target_amount, current_amount, deadline, idFinancial_goals, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Función para eliminar un objetivo financiero
const deleteFinancialGoal = (idFinancial_goals, fk_idUser, callback) => {
  const query = 'DELETE FROM Financial_goals WHERE idFinancial_goals = ? AND fk_idUser = ?';
  db.query(query, [idFinancial_goals, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createFinancialGoal,
  getAllFinancialGoals,
  getFinancialGoalById,
  updateFinancialGoal,
  deleteFinancialGoal
};
