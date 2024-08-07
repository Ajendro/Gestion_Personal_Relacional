const PersonalFinance = require('../models/personal_FinanceModel');  

// Create a Personal_Finance entry
exports.createPersonalFinance = (req, res) => {
  const { amount, description, transaction_date, fk_idUser, fk_idCategory } = req.body;
  PersonalFinance.createPersonalFinance(amount, description, transaction_date, fk_idUser, fk_idCategory, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, amount, description, transaction_date, fk_idUser, fk_idCategory });
  });
};

// Get all Personal_Finance entries
exports.getAllPersonalFinances = (req, res) => {
  PersonalFinance.getAllPersonalFinances((err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};

// Get a Personal_Finance entry by ID
exports.getPersonalFinanceById = (req, res) => {
  const { id } = req.params;
  PersonalFinance.getPersonalFinanceById(id, (err, personalFinance) => {
    if (err) return res.status(500).send(err);
    if (!personalFinance) return res.status(404).json({ message: 'Personal finance entry not found' });
    res.status(200).json(personalFinance);
  });
};

// Update a Personal_Finance entry
exports.updatePersonalFinance = (req, res) => {
  const { id } = req.params;
  const { amount, description, transaction_date, fk_idUser, fk_idCategory } = req.body;
  PersonalFinance.updatePersonalFinance(id, amount, description, transaction_date, fk_idUser, fk_idCategory, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Personal finance entry not found' });
    res.status(200).json({ message: 'Personal finance entry updated successfully' });
  });
};

// Delete a Personal_Finance entry
exports.deletePersonalFinance = (req, res) => {
  const { id } = req.params;
  PersonalFinance.deletePersonalFinance(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Personal finance entry not found' });
    res.status(200).json({ message: 'Personal finance entry deleted successfully' });
  });
};
