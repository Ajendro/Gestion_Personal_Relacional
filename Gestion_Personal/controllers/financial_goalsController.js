const FinancialGoals = require('../models/financial_goalsModel');

// Crear un objetivo financiero
exports.createFinancialGoal = (req, res) => {
  const { description, target_amount, current_amount, deadline, fk_idUser } = req.body;
  FinancialGoals.createFinancialGoal(description, target_amount, current_amount, deadline, fk_idUser, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id, description, target_amount, current_amount, deadline, fk_idUser });
  });
};

// Obtener todos los objetivos financieros
exports.getAllFinancialGoals = (req, res) => {
  FinancialGoals.getAllFinancialGoals((err, goals) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(goals);
  });
};

// Obtener un objetivo financiero por ID
exports.getFinancialGoalById = (req, res) => {
  const { idFinancial_goals, fk_idUser } = req.params;
  FinancialGoals.getFinancialGoalById(idFinancial_goals, fk_idUser, (err, goal) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!goal) return res.status(404).json({ message: 'Financial goal not found' });
    res.status(200).json(goal);
  });
};

// Actualizar un objetivo financiero
exports.updateFinancialGoal = (req, res) => {
  const { idFinancial_goals, fk_idUser } = req.params;
  const { description, target_amount, current_amount, deadline } = req.body;
  FinancialGoals.updateFinancialGoal(idFinancial_goals, fk_idUser, description, target_amount, current_amount, deadline, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Financial goal not found' });
    res.status(200).json({ message: 'Financial goal updated successfully' });
  });
};

// Eliminar un objetivo financiero
exports.deleteFinancialGoal = (req, res) => {
  const { idFinancial_goals, fk_idUser } = req.params;
  FinancialGoals.deleteFinancialGoal(idFinancial_goals, fk_idUser, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Financial goal not found' });
    res.status(200).json({ message: 'Financial goal deleted successfully' });
  });
};
