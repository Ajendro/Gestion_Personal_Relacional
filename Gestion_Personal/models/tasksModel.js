const db = require('../conexion/conexion');

// Función para crear una tarea
const createTask = (title, description, expiration_date, state, fk_idUser, fk_idCategory, callback) => {
  const query = 'INSERT INTO Tasks (title, description, expiration_date, state, fk_idUser, fk_idCategory) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [title, description, expiration_date, state, fk_idUser, fk_idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Función para obtener todas las tareas
const getAllTasks = (callback) => {
  const query = 'SELECT * FROM Tasks';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener una tarea por ID
const getTaskById = (id, callback) => {
  const query = 'SELECT * FROM Tasks WHERE idtasks = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Función para actualizar una tarea
const updateTask = (id, title, description, expiration_date, state, fk_idUser, fk_idCategory, callback) => {
  const query = 'UPDATE Tasks SET title = ?, description = ?, expiration_date = ?, state = ?, fk_idUser = ?, fk_idCategory = ? WHERE idtasks = ?';
  db.query(query, [title, description, expiration_date, state, fk_idUser, fk_idCategory, id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Función para eliminar una tarea
const deleteTask = (id, callback) => {
  const query = 'DELETE FROM Tasks WHERE idtasks = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
};
