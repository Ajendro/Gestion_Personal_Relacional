const PersonalObjectives = require('../models/personal_objetivesModel'); // Ajusta la ruta si es necesario

// Crear un objetivo personal
exports.createPersonalObjective = (req, res) => {
    const { description, start_date, end_date, state, fk_idUser } = req.body;
    PersonalObjectives.createPersonalObjective(description, start_date, end_date, state, fk_idUser, (err, id) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id, description, start_date, end_date, state, fk_idUser });
    });
};

// Obtener todos los objetivos personales
exports.getAllPersonalObjectives = (req, res) => {
    PersonalObjectives.getAllPersonalObjectives((err, objectives) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(objectives);
    });
};

// Obtener un objetivo personal por ID
exports.getPersonalObjectiveById = (req, res) => {
    const { idPersonal_objetives, fk_idUser } = req.params;
    PersonalObjectives.getPersonalObjectiveById(idPersonal_objetives, fk_idUser, (err, objective) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!objective) return res.status(404).json({ message: 'Personal objective not found' });
        res.status(200).json(objective);
    });
};

// Actualizar un objetivo personal
exports.updatePersonalObjective = (req, res) => {
    const { idPersonal_objetives, fk_idUser } = req.params;
    const { description, start_date, end_date, state } = req.body;
    PersonalObjectives.updatePersonalObjective(idPersonal_objetives, fk_idUser, description, start_date, end_date, state, (err, affectedRows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (affectedRows === 0) return res.status(404).json({ message: 'Personal objective not found' });
        res.status(200).json({ message: 'Personal objective updated successfully' });
    });
};

// Eliminar un objetivo personal
exports.deletePersonalObjective = (req, res) => {
    const { idPersonal_objetives, fk_idUser } = req.params;
    PersonalObjectives.deletePersonalObjective(idPersonal_objetives, fk_idUser, (err, affectedRows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (affectedRows === 0) return res.status(404).json({ message: 'Personal objective not found' });
        res.status(200).json({ message: 'Personal objective deleted successfully' });
    });
};
