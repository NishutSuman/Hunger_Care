const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    rest_name: {type: String, required: true},
    desc: {type: String, required: true},
    image_url: {type: String, required: true},
    rating: {type: Number, required: true},
    price: {type: Number, required: true},
    off: {type: String, required: true},
    coupon: {type: String, required: false},
    payment_method: {type: String, required: false},
    category: {type: String, required: true},
    cost_for_two: {type: Number, required: true},
    votes: {type: Number, required: false},
    review: {type: Number, required: false},

},{timestamps: true, versionKey: false})

const Product= new mongoose.model("product", productSchema);

module.exports= Product;