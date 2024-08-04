const Quotes = require('../models/quotesModel'); // Asegúrate de que la ruta sea correcta

// Crear una cita
exports.createQuote = (req, res) => {
    const { dating_date, location, state, fk_idUser, fk_idCategory } = req.body;
    Quotes.createQuote(dating_date, location, state, fk_idUser, fk_idCategory, (err, id) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id, dating_date, location, state, fk_idUser, fk_idCategory });
    });
};

// Obtener todas las citas
exports.getAllQuotes = (req, res) => {
    Quotes.getAllQuotes((err, quotes) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(quotes);
    });
};

// Obtener una cita por ID
exports.getQuoteById = (req, res) => {
    const { idQuotes, fk_idUser } = req.params;
    Quotes.getQuoteById(idQuotes, fk_idUser, (err, quote) => {
        if (err) return res.status(500).send(err);
        if (!quote) return res.status(404).json({ message: 'Quote not found' });
        res.status(200).json(quote);
    });
};

// Actualizar una cita
exports.updateQuote = (req, res) => {
    const { idQuotes, fk_idUser } = req.params;
    const { dating_date, location, state, fk_idCategory } = req.body;
    Quotes.updateQuote(idQuotes, fk_idUser, dating_date, location, state, fk_idCategory, (err, affectedRows) => {
        if (err) return res.status(500).send(err);
        if (affectedRows === 0) return res.status(404).json({ message: 'Quote not found' });
        res.status(200).json({ message: 'Quote updated successfully' });
    });
};

// Eliminar una cita
exports.deleteQuote = (req, res) => {
    const { idQuotes, fk_idUser } = req.params;
    Quotes.deleteQuote(idQuotes, fk_idUser, (err, affectedRows) => {
        if (err) return res.status(500).send(err);
        if (affectedRows === 0) return res.status(404).json({ message: 'Quote not found' });
        res.status(200).json({ message: 'Quote deleted successfully' });
    });
};
