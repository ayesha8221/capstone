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
const createCart = (req, res) => {
    const id = req.body.userID; req.body.productID; req.body.amount;
    insertCart(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

module.exports = {
    showCart,
    createCart,
  };