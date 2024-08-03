const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryControllers');

router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:idCategory', categoryController.getCategoryById);
router.put('/categories/:idCategory', categoryController.updateCategory);
router.delete('/categories/:idCategory', categoryController.deleteCategory);

module.exports = router;
