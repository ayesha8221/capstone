const db = require("../config/db.js");
const { createToken } = require("../middleware/AuthenticateUser.js")
const { compare } = require("bcrypt")
// const bcrypt = require ('bcrypt');


// Get everything from users cart
const getCart = (id, result,) => {
  db.query("SELECT Cart.cartID, Products.prodName AS prodName, Products.amount FROM Cart JOIN Products ON Cart.prodID = Products.prodID WHERE Cart.userID = ?",
   [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

//add something to cart

const insertCart = (userID, prodID, callback) => {
  db.query(
    'INSERT INTO Cart (userID, prodID) VALUES (?, ?)',
    [userID, prodID],
    (err, results) => {
      if (err) {
        console.log('Database error');
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};


// const deleteUserByID = (id, result) => {
//   db.query('DELETE FROM Users WHERE userID = ?', [id], (err, results) => {
//       if (err) {
//           console.log(err);
//           result(err, null);
//       } else {
//           result(null, results);
//       }
      
//   });
// };

// delete specific item 
const deleteCartItemFromDatabase = (userID, cartID, callback) => {
  db.query(
    'DELETE FROM Cart WHERE userID = ? AND cartID = ?',
    [userID, cartID],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};

module.exports = {
    getCart,
    insertCart,
    deleteCartItemFromDatabase,
  };