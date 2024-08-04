const db = require('../conexion/conexion');

// Función para crear una cuenta bancaria
const createBankAccount = (bank, balance, fk_idUser, fk_idCategory, callback) => {
  const query = 'INSERT INTO Bank_accounts (bank, balance, fk_idUser, fk_idCategory) VALUES (?, ?, ?, ?)';
  db.query(query, [bank, balance, fk_idUser, fk_idCategory], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Función para obtener todas las cuentas bancarias
const getAllBankAccounts = (callback) => {
  const query = 'SELECT * FROM Bank_accounts';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Función para obtener una cuenta bancaria por ID y usuario
const getBankAccountById = (idBank_accounts, fk_idUser, callback) => {
  const query = 'SELECT * FROM Bank_accounts WHERE idBank_accounts = ? AND fk_idUser = ?';
  db.query(query, [idBank_accounts, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Función para actualizar una cuenta bancaria
const updateBankAccount = (idBank_accounts, fk_idUser, bank, balance, fk_idCategory, callback) => {
  const query = 'UPDATE Bank_accounts SET bank = ?, balance = ?, fk_idCategory = ? WHERE idBank_accounts = ? AND fk_idUser = ?';
  db.query(query, [bank, balance, fk_idCategory, idBank_accounts, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

// Función para eliminar una cuenta bancaria
const deleteBankAccount = (idBank_accounts, fk_idUser, callback) => {
  const query = 'DELETE FROM Bank_accounts WHERE idBank_accounts = ? AND fk_idUser = ?';
  db.query(query, [idBank_accounts, fk_idUser], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  createBankAccount,
  getAllBankAccounts,
  getBankAccountById,
  updateBankAccount,
  deleteBankAccount
};
