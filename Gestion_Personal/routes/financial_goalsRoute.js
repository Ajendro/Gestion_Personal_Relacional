const express = require('express');
const router = express.Router();
const financialGoalsController = require('../controllers/financial_goalsController');

router.post('/financial-goals', financialGoalsController.createFinancialGoal);
router.get('/financial-goals', financialGoalsController.getAllFinancialGoals);
router.get('/financial-goals/:idFinancial_goals', financialGoalsController.getFinancialGoalById);
router.put('/financial-goals/:idFinancial_goals', financialGoalsController.updateFinancialGoal);
router.delete('/financial-goals/:idFinancial_goals', financialGoalsController.deleteFinancialGoal);

module.exports = router;
