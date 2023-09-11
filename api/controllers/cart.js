const { getCart, insertCart, deleteCartItem, updateCartById, deleteAllItems,} =require("../models/cartModels.js")

const showCart = (req, res) => {
    getCart(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

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
const deleteItem = (req, res) => {
  const cartID = req.params.id; // Extract the cartID from URL parameters

  // Call a function to delete the cart item, passing both userID and cartID
  deleteCartItem(cartID, (err, result) => {
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


const deleteCart = (req, res) => {
  const cartID = req.params.id; // Extract the cartID from URL parameters

  // Call a function to delete the cart item, passing both userID and cartID
  deleteAllItems(cartID, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      if (result.affectedRows === 0) {
        // No rows were affected, meaning the item was not found
        res.status(404).json({ error: 'Cart items not found' });
      } else {
        // Item deleted successfully
        res.status(200).json({ message: 'Cart items deleted successfully' });
      }
    }
  });
};


const updateCart = (req, res) => {
  const data = req.body;
  const id = req.params.id;
     data.userPass = bcrypt.hashSync(data.userPass, 10);
  updateCartById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = {
    showCart,
    createCart,
    deleteItem,
    updateCart,
    deleteCart
  };
