const express = require("express");
const router = express.Router();
const db = require("../config/db");

let cart = [];

// Get Cart
router.get("/", (req, res) => {

    if(cart.length === 0){
        return res.json([]);
    }

    const ids = cart.map(item => item.productId);

    db.query(
        `SELECT * FROM products WHERE id IN (${ids.join(",")})`,
        (err, results) => {

            if(err) return res.status(500).json(err);

            res.json(results);
        }
    );
});

// Add to Cart
router.post("/", (req,res)=>{

    cart.push(req.body);

    res.json({
        message:"Product added to cart!"
    });

});

// Remove from Cart
router.delete("/:id",(req,res)=>{

    const id = parseInt(req.params.id);

    cart = cart.filter(item => item.productId !== id);

    res.json({
        message:"Product removed successfully!"
    });

});

module.exports = router;