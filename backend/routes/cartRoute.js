const express = require('express');
const { addToCart, getCart } = require('../controllers/cartControllers');

const router = express.Router();

router.post('/add', addToCart);
router.get('/', getCart); // Add this line to get cart items

module.exports = router;