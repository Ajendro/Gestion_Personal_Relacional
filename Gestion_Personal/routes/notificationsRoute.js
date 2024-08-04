const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController'); // Verifica que esta ruta sea correcta

// Define las rutas
router.post('/notifications', notificationsController.createNotification);
router.get('/notifications', notificationsController.getAllNotifications);
router.get('/notifications/:id', notificationsController.getNotificationById);
router.put('/notifications/:id', notificationsController.updateNotification);
router.delete('/notifications/:id', notificationsController.deleteNotification);

module.exports = router;

