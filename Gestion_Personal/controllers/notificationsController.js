const Notifications = require('../models/notificationsModel');

// Create a notification
exports.createNotification = (req, res) => {
  const { message, shipping_date, state, fk_idUser, fk_idCategory } = req.body;
  Notifications.createNotification(message, shipping_date, state, fk_idUser, fk_idCategory, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, message, shipping_date, state, fk_idUser, fk_idCategory });
  });
};

// Get all notifications
exports.getAllNotifications = (req, res) => {
  Notifications.getAllNotifications((err, notifications) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(notifications);
  });
};

// Get a notification by ID
exports.getNotificationById = (req, res) => {
  const { id } = req.params;
  Notifications.getNotificationById(id, (err, notification) => {
    if (err) return res.status(500).send(err);
    if (!notification) return res.status(404).json({ message: 'Notification not found' });
    res.status(200).json(notification);
  });
};

// Update a noti
exports.updateNotification = (req, res) => {
  const { id } = req.params;
  const { message, shipping_date, state, fk_idUser, fk_idCategory } = req.body;
  Notifications.updateNotification(id, message, shipping_date, state, fk_idUser, fk_idCategory, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Notification not found' });
    res.status(200).json({ message: 'Notification updated successfully' });
  });
};

// Delete a notification
exports.deleteNotification = (req, res) => {
  const { id } = req.params;
  Notifications.deleteNotification(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Notification not found' });
    res.status(200).json({ message: 'Notification deleted successfully' });
  });
};
