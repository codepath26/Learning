const express =require('express');
const productsController = require('../Controllers/Products');
const router = express.Router();

router.post('/products',productsController.addProducts);
router.get('/products/:id',productsController.getProduct);
router.get('/products',productsController.getProducts);
router.put('/products/:id',productsController.updateProduct);
router.delete('/products/:id',productsController.deleteProduct);

module.exports = router;
