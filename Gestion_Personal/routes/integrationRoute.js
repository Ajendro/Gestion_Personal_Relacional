const express = require('express');
const router = express.Router();
const integrationController = require('../controllers/integrationController');

// Define routes
router.post('/integrations', integrationController.createIntegration);
router.get('/integrations', integrationController.getAllIntegrations);
router.get('/integrations/:idIntegration', integrationController.getIntegrationById);
router.put('/integrations/:idIntegration', integrationController.updateIntegration);
router.delete('/integrations/:idIntegration', integrationController.deleteIntegration);

module.exports = router;
