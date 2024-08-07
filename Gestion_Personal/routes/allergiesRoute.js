const express = require('express');
const router = express.Router();
const allergiesController = require('../controllers/allergiesController');

router.post('/allergies', allergiesController.createAllergy);
router.get('/allergies', allergiesController.getAllAllergies);
router.get('/:idAllergies', allergiesController.getAllergyById);
router.put('/:idAllergies', allergiesController.updateAllergy);
router.delete('/:idAllergies', allergiesController.deleteAllergy);

module.exports = router;
