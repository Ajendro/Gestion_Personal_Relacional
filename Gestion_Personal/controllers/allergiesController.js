const Allergies = require('../models/allergiesModel');

// Create a new allergy
exports.createAllergy = (req, res) => {
  const { name, description, severity, fk_idHealth } = req.body;
  Allergies.createAllergy(name, description, severity, fk_idHealth, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id, name, description, severity, fk_idHealth });
  });
};

// Get all allergies
exports.getAllAllergies = (req, res) => {
  Allergies.getAllAllergies((err, allergies) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(allergies);
  });
};

// Get an allergy by ID
exports.getAllergyById = (req, res) => {
  const { idAllergies } = req.params;
  Allergies.getAllergyById(idAllergies, (err, allergy) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!allergy) return res.status(404).json({ message: 'Allergy not found' });
    res.status(200).json(allergy);
  });
};

// Update an allergy
exports.updateAllergy = (req, res) => {
  const { idAllergies } = req.params;
  const { name, description, severity, fk_idHealth } = req.body;
  Allergies.updateAllergy(idAllergies, name, description, severity, fk_idHealth, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Allergy not found' });
    res.status(200).json({ message: 'Allergy updated successfully' });
  });
};

// Delete an allergy
exports.deleteAllergy = (req, res) => {
  const { idAllergies } = req.params;
  Allergies.deleteAllergy(idAllergies, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Allergy not found' });
    res.status(200).json({ message: 'Allergy deleted successfully' });
  });
};
