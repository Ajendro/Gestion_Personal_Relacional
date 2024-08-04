const express = require('express');
const router = express.Router();
const healthControllers = require('../controllers/healthController');


router.post('/health', healthControllers.createHealthRecord);
router.get('/health', healthControllers.getAllHealthRecords);
router.get('/health/:idHealth', healthControllers.getHealthRecordById);
router.put('/health/:idHealth', healthControllers.updateHealthRecord);
router.delete('/health/:idHealth', healthControllers.deleteHealthRecord);

module.exports = router;
