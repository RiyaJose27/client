const ProductController = require("../controllers/product.controller");
const Product = require("../models/product.model");

module.exports = app => {
    app.get("/api/products/all", ProductController.findAllProducts);
    app.post("/api/products/create", ProductController.createProduct);
    app.get("/api/products/:_id", ProductController.findSingleProduct);
    app.delete("/api/products/:_id/delete", ProductController.deleteSingleProduct);
    app.patch("/api/products/:_id/update", ProductController.updateSingleProduct);
    // app.put("/api/products/:_id/addTopping", ProductController.addTopping);
}