require("dotenv").config();
require("./config/db");
const express = require("express");

const app = express();

const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("🚀 CloudKart Backend");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});