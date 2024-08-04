const express = require('express');
const router = express.Router();
const bankAccountController = require('../controllers/bank_accountsController');

router.post('/bank-accounts', bankAccountController.createBankAccount);
router.get('/bank-accounts', bankAccountController.getAllBankAccounts);
router.get('/bank-accounts/:idBank_accounts', bankAccountController.getBankAccountById);
router.put('/bank-accounts/:idBank_accounts', bankAccountController.updateBankAccount);
router.delete('/bank-accounts/:idBank_accounts', bankAccountController.deleteBankAccount);

module.exports = router;
