const Integrations = require('../models/integrationModel'); // Adjust path as needed

// Crear una integración
exports.createIntegration = (req, res) => {
    const { token, date_expire, fk_idUser, fk_idCategory } = req.body;
    Integrations.createIntegration(token, date_expire, fk_idUser, fk_idCategory, (err, id) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id, token, date_expire, fk_idUser, fk_idCategory });
    });
};

// Obtener todas las integraciones
exports.getAllIntegrations = (req, res) => {
    Integrations.getAllIntegrations((err, integrations) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(integrations);
    });
};

// Obtener una integración por ID
exports.getIntegrationById = (req, res) => {
    const { idIntegration } = req.params;
    Integrations.getIntegrationById(idIntegration, (err, integration) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!integration) return res.status(404).json({ message: 'Integration not found' });
        res.status(200).json(integration);
    });
};

// Actualizar una integración
exports.updateIntegration = (req, res) => {
    const { idIntegration } = req.params;
    const { token, date_expire, fk_idUser, fk_idCategory } = req.body;
    Integrations.updateIntegration(idIntegration, token, date_expire, fk_idUser, fk_idCategory, (err, affectedRows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (affectedRows === 0) return res.status(404).json({ message: 'Integration not found' });
        res.status(200).json({ message: 'Integration updated successfully' });
    });
};

// Eliminar una integración
exports.deleteIntegration = (req, res) => {
    const { idIntegration } = req.params;
    Integrations.deleteIntegration(idIntegration, (err, affectedRows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (affectedRows === 0) return res.status(404).json({ message: 'Integration not found' });
        res.status(200).json({ message: 'Integration deleted successfully' });
    });
};
