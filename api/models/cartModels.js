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

const insertCart = (userID, callback) => {
    db.query(
      'INSERT INTO Cart (userID, prodID, amount) SELECT ? AS userID, Products.prodID, Products.amount FROM Products WHERE Cart.userID = ?;',
      [userID, userID],
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

// const insertCart = (id, result) => {
//   db.query(
//     "INSERT INTO Cart.cartID SET Products.prodName AS prodName, Products.amount FROM Cart JOIN Products ON Cart.prodID = Products.prodID WHERE Cart.userID = ?",
//     [id],
//     (err, results) => {
//       if (err) {
//         console.log('Database error');
//         result(err, null);
//       } else {
//         result(null, results);
//       }
//     }
//   );
// };

// const insertCart = (userID, productID, amount, callback) => {
//     // Fetch the "amount" from the "Products" table based on the "productID"
//     db.query(
//       "SELECT amount FROM Products WHERE prodID = ?",
//       [productID],
//       (err, productResult) => {
//         if (err) {
//           console.log('Database error:', err);
//           callback(err, null);
//         } else {
//           if (productResult.length === 0) {
//             // Handle the case where the product with the given ID doesn't exist
//             callback("Product not found", null);
//           } else {
//             const cartAmount = productResult[0].amount;
  
//             // Insert the item into the cart with the retrieved "amount"
//             db.query(
//               "INSERT INTO Cart (userID, prodID, amount) VALUES (?, ?, ?)",
//               [userID, productID, amount],
//               (err, insertResult) => {
//                 if (err) {
//                   console.log('Database error:', err);
//                   callback(err, null);
//                 } else {
//                   callback(null, insertResult);
//                 }
//               }
//             );
//           }
//         }
//       }
//     );
//   };

module.exports = {
    getCart,
    insertCart,
  };