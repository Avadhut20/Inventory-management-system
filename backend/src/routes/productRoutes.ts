import express from 'express';
import { createProduct, getProductsByCategory } from '../controllers/productController';

const router = express.Router();

// POST request to create a product
router.post('/products', createProduct); 
// GET request to get products by category
router.get('/products/:category', getProductsByCategory); 

export default router;
