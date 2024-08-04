const express = require('express');
const router = express.Router();
const personalFinanceController = require('../controllers/personal_FinanceController');  

// Define routes for Personal_Finance operations
router.post('/personal_finances', personalFinanceController.createPersonalFinance);
router.get('/personal_finances', personalFinanceController.getAllPersonalFinances);
router.get('/personal_finances/:id', personalFinanceController.getPersonalFinanceById);
router.put('/personal_finances/:id', personalFinanceController.updatePersonalFinance);
router.delete('/personal_finances/:id', personalFinanceController.deletePersonalFinance);

module.exports = router;
