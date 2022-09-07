const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    imgUrl: {type: String, required: true},
    rating: {type: Number, required: true},
    offer: {type: Number, required: true},
    category: {type: String, required: true},
    tags: {type: [String], required: true},

},{timestamps: true, versionKey: false})

const Product= new mongoose.model("product", productSchema);

module.exports= Product;