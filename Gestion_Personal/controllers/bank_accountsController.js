const BankAccounts = require('../models/bank_accountsModel');

// Crear una cuenta bancaria
exports.createBankAccount = (req, res) => {
    const { bank, balance, fk_idUser, fk_idCategory } = req.body;
    BankAccounts.createBankAccount(bank, balance, fk_idUser, fk_idCategory, (err, id) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id, bank, balance, fk_idUser, fk_idCategory });
    });
};

// Obtener todas las cuentas bancarias
exports.getAllBankAccounts = (req, res) => {
    BankAccounts.getAllBankAccounts((err, bankAccounts) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(bankAccounts);
    });
};

// Obtener una cuenta bancaria por ID y usuario
exports.getBankAccountById = (req, res) => {
    const { idBank_accounts, fk_idUser } = req.params;
    BankAccounts.getBankAccountById(idBank_accounts, fk_idUser, (err, bankAccount) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!bankAccount) return res.status(404).json({ message: 'Bank account not found' });
        res.status(200).json(bankAccount);
    });
};

// Actualizar una cuenta bancaria
exports.updateBankAccount = (req, res) => {
    const { idBank_accounts, fk_idUser } = req.params;
    const { bank, balance, fk_idCategory } = req.body;
    BankAccounts.updateBankAccount(idBank_accounts, fk_idUser, bank, balance, fk_idCategory, (err, affectedRows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (affectedRows === 0) return res.status(404).json({ message: 'Bank account not found' });
        res.status(200).json({ message: 'Bank account updated successfully' });
    });
};

// Eliminar una cuenta bancaria
exports.deleteBankAccount = (req, res) => {
    const { idBank_accounts, fk_idUser } = req.params;
    BankAccounts.deleteBankAccount(idBank_accounts, fk_idUser, (err, affectedRows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (affectedRows === 0) return res.status(404).json({ message: 'Bank account not found' });
        res.status(200).json({ message: 'Bank account deleted successfully' });
    });
};
