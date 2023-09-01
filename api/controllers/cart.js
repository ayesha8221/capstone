const { getCart, insertCart} =require("../models/cartModels.js")

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

const createCart = (req, res) => {
    const userID = req.params.id;
    
    // Assuming req.body contains the necessary data (e.g., prodID)
    const { prodID } = req.body;
  
    // Call the insertCart function with the userID
    insertCart(userID, prodID, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
      } else {
        res.status(200).json({ message: 'Cart created successfully', cart: results });
      }
    });
  };


module.exports = {
    showCart,
    createCart,
  };