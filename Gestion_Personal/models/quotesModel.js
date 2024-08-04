const db = require('../conexion/conexion');

// Función para crear una cita
const createQuote = (dating_date, location, state, fk_idUser, fk_idCategory, callback) => {
  const query = 'INSERT INTO Quotes (dating_date, location, state, fk_idUser, fk_idCategory) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [dating_date, location, state, fk_idUser, fk_idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Función para obtener todas las citas
const getAllQuotes = (callback) => {
  const query = 'SELECT * FROM Quotes';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener una cita por ID
const getQuoteById = (idQuotes, fk_idUser, callback) => {
  const query = 'SELECT * FROM Quotes WHERE idQuotes = ? AND fk_idUser = ?';
  db.query(query, [idQuotes, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Función para actualizar una cita
const updateQuote = (idQuotes, fk_idUser, dating_date, location, state, fk_idCategory, callback) => {
  const query = 'UPDATE Quotes SET dating_date = ?, location = ?, state = ?, fk_idCategory = ? WHERE idQuotes = ? AND fk_idUser = ?';
  db.query(query, [dating_date, location, state, fk_idCategory, idQuotes, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Función para eliminar una cita
const deleteQuote = (idQuotes, fk_idUser, callback) => {
  const query = 'DELETE FROM Quotes WHERE idQuotes = ? AND fk_idUser = ?';
  db.query(query, [idQuotes, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createQuote,
  getAllQuotes,
  getQuoteById,
  updateQuote,
  deleteQuote
};
