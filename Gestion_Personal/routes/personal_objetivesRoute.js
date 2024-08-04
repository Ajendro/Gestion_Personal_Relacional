const express = require('express');
const router = express.Router();
const personalObjectivesController = require('../controllers/personal_objetivesController');

router.post('/personal-objectives', personalObjectivesController.createPersonalObjective);
router.get('/personal-objectives', personalObjectivesController.getAllPersonalObjectives);
router.get('/personal-objectives/:idPersonal_objetives', personalObjectivesController.getPersonalObjectiveById);
router.put('/personal-objectives/:idPersonal_objetives', personalObjectivesController.updatePersonalObjective);
router.delete('/personal-objectives/:idPersonal_objetives', personalObjectivesController.deletePersonalObjective);

module.exports = router;
