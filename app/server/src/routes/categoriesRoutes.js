const express = require('express');
const CategoriesController = require('../controllers/CategoriesController');

const router = express.Router();
const categoriesController = new CategoriesController();

router.post('/', categoriesController.createCategory.bind(categoriesController));
router.get('/:id', categoriesController.getCategoryById.bind(categoriesController));
router.put('/:id', categoriesController.updateCategory.bind(categoriesController));
router.delete('/:id', categoriesController.deleteCategory.bind(categoriesController));
router.get('/', categoriesController.getCategories.bind(categoriesController));

module.exports = router;
