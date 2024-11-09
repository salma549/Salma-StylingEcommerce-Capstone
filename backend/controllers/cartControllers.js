// const Cart = require('../models/Cart');
// const Product = require('../models/Product');

// // Add product and accessories to cart
// exports.addToCart = async (req, res) => {
//   const { productId, accessoryIds } = req.body;

//   try {
//     const product = await Product.findById(productId);
//     if (!product) return res.status(404).json({ message: 'Product not found' });

//     let cart = await Cart.findOne(); // Assuming single cart
//     if (!cart) cart = new Cart();

//     // Add product to cart
//     cart.items.push({ product: product._id, quantity: 1 });

//     // Add accessories to cart
//     accessoryIds.forEach(async (accessoryId) => {
//       const accessory = product.accessories.id(accessoryId);
//       if (accessory) {
//         cart.items.push({ product: accessory._id, quantity: 1 });
//       }
//     });

//     // Update total price
//     cart.totalPrice += product.price;
//     accessoryIds.forEach(id => {
//       const accessory = product.accessories.id(id);
//       cart.totalPrice += accessory.price;
//     });

//     await cart.save();
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add product and accessories to cart
exports.addToCart = async (req, res) => {
  const { productId, accessoryIds } = req.body;

  try {
    // Find the main product
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Find or create a new cart
    let cart = await Cart.findOne(); // Assuming a single cart for simplicity
    if (!cart) {
      cart = new Cart();
    }

    // Add product to cart if it is not already added
    const existingProduct = cart.items.find(item => item.product.toString() === product._id.toString());
    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
      cart.items.push({ product: product._id, quantity: 1 }); // Add new product
    }

    // Add accessories to cart
    for (const accessoryId of accessoryIds) {
      const accessory = product.accessories.id(accessoryId);
      if (accessory) {
        const existingAccessory = cart.items.find(item => item.product.toString() === accessory._id.toString());
        if (existingAccessory) {
          existingAccessory.quantity += 1; // Increase quantity if accessory already in cart
        } else {
          cart.items.push({ product: accessory._id, quantity: 1 }); // Add new accessory
        }
      }
    }

    // Update total price
    cart.totalPrice += product.price; // Add product price
    accessoryIds.forEach(id => {
      const accessory = product.accessories.id(id);
      if (accessory) {
        cart.totalPrice += accessory.price; // Add accessory price if it exists
      }
    });

    // Save the cart
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: error.message });
  }
};

exports.getCart = async (req, res) => {
    try {
      const cart = await Cart.findOne(); // Assuming a single cart for simplicity
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
  
      res.json(cart);
    } catch (error) {
      console.error(error); // Log error for debugging
      res.status(500).json({ message: error.message });
    }
  };