import axios from 'axios';

export const getProducts = (category) => axios.get(`/api/products?category=${category}`);
export const getProductById = (id) => axios.get(`/api/products/${id}`);
export const addToCart = (productId, accessoryIds) => axios.post('/api/cart/add', { productId, accessoryIds });
export const getCart = () => axios.get('/api/cart');