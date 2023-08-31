const db = require("../config/db.js");
const { createToken } = require("../middleware/AuthenticateUser.js")
const { compare } = require("bcrypt")
// const bcrypt = require ('bcrypt');


// Get everything from users cart
const getCart = (id, result,) => {
  db.query("SELECT Cart.cartID, Products.prodName AS prodName, Products.amount FROM Cart JOIN Products ON Cart.prodID = Products.prodID WHERE Cart.userID = ?", [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

//add something to cart

const insertCart = (id, result) => {
    db.query("INSERT INTO Cart (userID, prodID, Products.amount) VALUES (?, ?, ?) ;", [id], (err, results) => {             
        if(err) {
            console.log('Database error');
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

module.exports = {
    getCart,
    insertCart,
  };