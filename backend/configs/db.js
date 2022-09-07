const mongoose= require('mongoose');
const connectDB= () => {
    return mongoose.connect("mongodb+srv://NishutSuman:John1920@cluster0.xilgsap.mongodb.net/amHungryApp?retryWrites=true&w=majority")
}
module.exports = connectDB;