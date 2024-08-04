const Tasks = require('../models/tasksModel');

// Crear una tarea
exports.createTask = (req, res) => {
  const { title, description, expiration_date, state, fk_idUser, fk_idCategory } = req.body;
  Tasks.createTask(title, description, expiration_date, state, fk_idUser, fk_idCategory, (err, id) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id, title, description, expiration_date, state, fk_idUser, fk_idCategory });
  });
};

// Obtener todas las tareas
exports.getAllTasks = (req, res) => {
  Tasks.getAllTasks((err, tasks) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(tasks);
  });
};

// Obtener una tarea por ID
exports.getTaskById = (req, res) => {
  const { id } = req.params;
  Tasks.getTaskById(id, (err, task) => {
    if (err) return res.status(500).send(err);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  });
};

// Actualizar una tarea
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, expiration_date, state, fk_idUser, fk_idCategory } = req.body;
  Tasks.updateTask(id, title, description, expiration_date, state, fk_idUser, fk_idCategory, (err, affectedRows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (affectedRows === 0) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ message: 'Task updated successfully' });
  });
};

// Eliminar una tarea
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Tasks.deleteTask(id, (err, affectedRows) => {
    if (err) return res.status(500).send(err);
    if (affectedRows === 0) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully' });
  });
};
