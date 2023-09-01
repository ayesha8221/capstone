// import express
const express = require("express");
const router = express.Router();
// import functions from controller
const {
  showProducts,
  showProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");

//get all products
router.get("/products", showProducts);

//get single product
router.get("/products/:id", showProductById);

//create a new product
router.post("/products", createProduct);

// Delete a product
router.delete("/products/:id", deleteProduct);

// Update a product
router.put("/products/:id", updateProduct);

// USER ROUTES

const {
  showUsers,
  showUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/users");
const { userLogin } = require("../models/userModels");

//get all users
router.get("/users", showUsers);

//get single user
router.get("/users/:id", showUserById);

//create a new user
router.post("/users", createUser);

// Delete a user
router.delete("/users/:id", deleteUser);

// Update a user
router.put("/users/:id", updateUser);

//login
router.post("/user/login", userLogin);



// export default router
module.exports = router;


// Cart routes

const {
  showCart,
  createCart,
  deleteCartItem,
} = require("../controllers/cart");

//get all cart items from user ID
router.get("/user/:id/carts", showCart);

//Add item to cart
router.post("/user/:id/cart", createCart);

router.delete("/user/:id/cart/:id", deleteCartItem);