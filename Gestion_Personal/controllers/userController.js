const Users = require('../models/userModel');

// Create a user
exports.createUser = (req, res) => {
  const { name, registration_date, birth_date, fk_idCategory } = req.body;
  Users.createUser(name, registration_date, birth_date, fk_idCategory, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, name, registration_date, birth_date, fk_idCategory });
  });
};

// Get all users
exports.getAllUsers = (req, res) => {
  Users.getAllUsers((err, users) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(users);
  });
};

// Get a user by ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  Users.getUserById(id, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  });
};

// Update a user
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, registration_date, birth_date, fk_idCategory } = req.body;
  Users.updateUser(id, name, registration_date, birth_date, fk_idCategory, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User updated successfully' });
  });
};

// Delete a user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  Users.deleteUser(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  });
};