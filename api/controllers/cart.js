const { getCart, insertCart, deleteCartItemFromDatabase} =require("../models/cartModels.js")

const showCart = (req, res) => {
    getCart(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//adding to cart
// Create New Product
// const createCart = (req, res) => {
//     const id = req.body.userID; req.body.productID; req.body.amount;
//     insertCart(id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }

// const createCart = (req, res) => {
//     // Extract data from the request body
  
//     // Call the insertCart function with extracted data
//     insertCart(req.params.id, (err, results) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.json(results);
//       }
//     });
//   };

// const createCart = (req, res) => {
  
//   // No need to extract prodID from req.body
  
//   // Call the insertCart function with only the userID
//   insertCart(req.params.id, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Database error' });
//       console.log(res.status(500))
//     } else {
//       res.status(200).json({ message: 'Cart created successfully', cart: results });
//     }
//   });
// };
const createCart = (req, res) => {
  // Extract the userID from URL parameters
  const userID = req.params.id;

  // Extract the prodID from the request body
  const prodID = req.body.prodID; // Make sure the request body contains the prodID field

  // Call the insertCart function with userID and prodID
  insertCart(userID, prodID, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.status(200).json({ message: 'Cart created successfully', cart: results });
    }
  });
};

//function to delete cart item
const deleteCartItem = (req, res) => {
  const userID = req.params.id; // Extract the userID from URL parameters
  const cartID = req.params.id; // Extract the cartID from URL parameters

  // Call a function to delete the cart item, passing both userID and cartID
  deleteCartItemFromDatabase(userID, cartID, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      if (result.affectedRows === 0) {
        // No rows were affected, meaning the item was not found
        res.status(404).json({ error: 'Cart item not found' });
      } else {
        // Item deleted successfully
        res.status(200).json({ message: 'Cart item deleted successfully' });
      }
    }
  });
};

module.exports = {
    showCart,
    createCart,
    deleteCartItem
  };