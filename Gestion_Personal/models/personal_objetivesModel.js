const db = require('../conexion/conexion');

// Función para crear un objetivo personal
const createPersonalObjective = (description, start_date, end_date, state, fk_idUser, callback) => {
  const query = 'INSERT INTO Personal_objetives (description, start_date, end_date, state, fk_idUser) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [description, start_date, end_date, state, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Función para obtener todos los objetivos personales
const getAllPersonalObjectives = (callback) => {
  const query = 'SELECT * FROM Personal_objetives';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener un objetivo personal por ID
const getPersonalObjectiveById = (idPersonal_objetives, fk_idUser, callback) => {
  const query = 'SELECT * FROM Personal_objetives WHERE idPersonal_objetives = ? AND fk_idUser = ?';
  db.query(query, [idPersonal_objetives, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Función para actualizar un objetivo personal
const updatePersonalObjective = (idPersonal_objetives, fk_idUser, description, start_date, end_date, state, callback) => {
  const query = 'UPDATE Personal_objetives SET description = ?, start_date = ?, end_date = ?, state = ? WHERE idPersonal_objetives = ? AND fk_idUser = ?';
  db.query(query, [description, start_date, end_date, state, idPersonal_objetives, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Función para eliminar un objetivo personal
const deletePersonalObjective = (idPersonal_objetives, fk_idUser, callback) => {
  const query = 'DELETE FROM Personal_objetives WHERE idPersonal_objetives = ? AND fk_idUser = ?';
  db.query(query, [idPersonal_objetives, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createPersonalObjective,
  getAllPersonalObjectives,
  getPersonalObjectiveById,
  updatePersonalObjective,
  deletePersonalObjective
};
