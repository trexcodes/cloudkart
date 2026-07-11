const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "All Products API Working"
    });
});

module.exports = router;