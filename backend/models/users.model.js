const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
},{timestamps: true, versionKey: false})

const User= new mongoose.model("user", userSchema);

module.exports= User;