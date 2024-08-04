const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quotesController');

// Define routes for managing quotes
router.post('/quotes', quoteController.createQuote);
router.get('/quotes', quoteController.getAllQuotes);
router.get('/quotes/:idQuotes/', quoteController.getQuoteById);
router.put('/quotes/:idQuotes/', quoteController.updateQuote);
router.delete('/quotes/:idQuotes/', quoteController.deleteQuote);

module.exports = router;
