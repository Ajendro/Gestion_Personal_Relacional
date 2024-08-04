const db = require('../conexion/conexion');

// Function to create a notification
const createNotification = (message, shipping_date, state, fk_idUser, fk_idCategory, callback) => {
  const query = 'INSERT INTO Notifications (message, shipping_date, state, fk_idUser, fk_idCategory) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [message, shipping_date, state, fk_idUser, fk_idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Function to get all notifications
const getAllNotifications = (callback) => {
  const query = 'SELECT * FROM Notifications';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to get a notification by ID
const getNotificationById = (id, callback) => {
  const query = 'SELECT * FROM Notifications WHERE idNotifications = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Function to update a notification
const updateNotification = (id, message, shipping_date, state, fk_idUser, fk_idCategory, callback) => {
  const query = 'UPDATE Notifications SET message = ?, shipping_date = ?, state = ?, fk_idUser = ?, fk_idCategory = ? WHERE idNotifications = ?';
  db.query(query, [message, shipping_date, state, fk_idUser, fk_idCategory, id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Function to delete a notification
const deleteNotification = (id, callback) => {
  const query = 'DELETE FROM Notifications WHERE idNotifications = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification
};
