const db = require("../config/db");

const getAllProducts = (callback) => {
    const sql = "SELECT * FROM products";
    db.query(sql, callback);
};

module.exports = {
    getAllProducts
};