const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quotesController');

// Define routes for managing quotes
router.post('/quotes', quoteController.createQuote);
router.get('/quotes', quoteController.getAllQuotes);
router.get('/quotes/:idQuotes/:fk_idUser', quoteController.getQuoteById);
router.put('/quotes/:idQuotes/:fk_idUser', quoteController.updateQuote);
router.delete('/quotes/:idQuotes/:fk_idUser', quoteController.deleteQuote);

module.exports = router;
