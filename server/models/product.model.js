const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String


//     name: {
//         type: String,
//         required: [true, "must have a name!"],
//         minLength: [3, "need at least 3 characters"]
//     },
//     artist: {
//         type: String,
//         required: [true, "must have an artist!"],
//         minLength: [3, "need at least 3 characters"]
//     },
//     imgURL: {
//         type: String,
//         required: [true, "must have an image!"],
//         minLength: [8, "need at least 3 characters"]
//     },
//     releaseYear: {
//         type: Number,
//         required: [true, "must have a release year!"],
//         validate: {
//             validator: (input) => {
//                 return input >= 1980 && input <= 1989;
//             },
//             message: (input) => {
//                 return `${input} is not in the 80s!`
//             }
//         }
//     },
//     genre: String,
//     rating: {
//         type:Number,
//         required: [true, "just ask paul"],
//         min: 0,
//         max: 5
//     }
// }, {timestamps: true})
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;