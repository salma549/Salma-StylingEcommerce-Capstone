// productRoutes.js
const express = require('express');
const { getAllProducts, getProductById, createProducts } = require('../controllers/productControllers');

const router = express.Router();

// Route for creating a new product
router.post('/', createProducts);

// Route for getting all products
router.get('/', getAllProducts);

// Route for getting a product by ID
router.get('/:id', getProductById);

module.exports = router;