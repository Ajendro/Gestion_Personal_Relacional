const Health = require('../models/healthModel');

// Create a new health record
exports.createHealthRecord = (req, res) => {
  const { registration_date, weight, heart_rate, allergies, fk_idUser } = req.body;
  Health.createHealthRecord(registration_date, weight, heart_rate, allergies, fk_idUser, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id, registration_date, weight, heart_rate, allergies, fk_idUser });
  });
};

// Get all health records
exports.getAllHealthRecords = (req, res) => {
  Health.getAllHealthRecords((err, records) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(records);
  });
};

// Get a health record by ID
exports.getHealthRecordById = (req, res) => {
  const { idHealth } = req.params;
  Health.getHealthRecordById(idHealth, (err, record) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!record) return res.status(404).json({ message: 'Health record not found' });
    res.status(200).json(record);
  });
};

// Update a health record
exports.updateHealthRecord = (req, res) => {
  const { idHealth } = req.params;
  const { registration_date, weight, heart_rate, allergies } = req.body;
  Health.updateHealthRecord(idHealth, registration_date, weight, heart_rate, allergies, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Health record not found' });
    res.status(200).json({ message: 'Health record updated successfully' });
  });
};

// Delete a health record
exports.deleteHealthRecord = (req, res) => {
  const { idHealth } = req.params;
  Health.deleteHealthRecord(idHealth, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Health record not found' });
    res.status(200).json({ message: 'Health record deleted successfully' });
  });
};
