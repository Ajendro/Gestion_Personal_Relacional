const db = require('../conexion/conexion');

const createCategory = (name, Category_idCategory, callback) => {
  // Use default value for Category_idCategory if it is null or undefined
  const query = 'INSERT INTO Category (name, Category_idCategory) VALUES (?, ?)';
  db.query(query, [name, Category_idCategory || null], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.insertId);
  });
};


// Función para obtener todas las categorías
const getAllCategories = (callback) => {
  const query = 'SELECT * FROM category';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener una categoría por ID
const getCategoryById = (id, callback) => {
  const query = 'SELECT * FROM category WHERE idCategory = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};


// Función para actualizar una categoría
const updateCategory = (id, name, callback) => {
  const query = 'UPDATE Category SET name = ? WHERE idCategory = ?';
  db.query(query, [name, id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};



// Función para eliminar una categoría
const deleteCategory = (id, callback) => {
  const query = 'DELETE FROM Category WHERE idCategory = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};