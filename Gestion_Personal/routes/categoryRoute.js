const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryControllers');

router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/deletecategories/:id', categoryController.deleteCategory);

module.exports = router;
