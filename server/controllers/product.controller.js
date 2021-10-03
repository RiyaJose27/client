const Product = require("../models/product.model");

module.exports.findAllProducts = (req,res) => {
    console.log("hey it's me, the find all function!");

    Product.find({})
        .then(allProducts => res.json({results: allProducts}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json({results: newProduct}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.findSingleProduct = (req,res) => {
    Product.findOne({_id: req.params._id})
        .then(singleProduct => res.json({results: singleProduct}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.deleteSingleProduct = (req,res) => {
    Product.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.updateSingleProduct = (req,res) => {
    Product.findOneAndUpdate({_id:req.params._id},
        req.body)
        .then(singleProduct => res.json({results: singleProduct}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

// module.exports.addTopping = (req,res) => {
//     Product.updateOne({_id: req.params._id},
//         {$push: {toppings: req.body.topping}})
//         .then(singleProduct => res.json({results: singleProduct}))
//         .catch(err => res.json({message: "that didn't quite work", err}))
// }
