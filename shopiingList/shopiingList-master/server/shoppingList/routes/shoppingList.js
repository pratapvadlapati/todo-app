var express = require('express');
var router = express.Router();
var ProductsController = require('../controllers/productController');
var CartController     = require('../controllers/cartController');
var userController    = require('../controllers/loginController');



//shoppingList routes..

//user-login-form
router.post('/validateUser', userController.userValidate);


//register -user
router.post('/registerUser', userController.UserRegister);

//get Products List
router.get('/products', ProductsController.ProductsList);


//get logged-in cart list
router.get('/cart', CartController.CartList);

//add products to list
router.post('/add/product', ProductsController.addProduct);


module.exports = router;


