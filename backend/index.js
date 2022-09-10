const express= require('express');
const cors= require('cors');
require("dotenv").config();
const connectDB= require('./configs/db');
const productController= require("./controllers/products.controller")
const userController= require("./controllers/user.controller");
const { response } = require('express');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productController);
app.use("/users", userController);
const port=process.env.PORT || 5000;
app.listen(port, async()=>{
    try {
        await connectDB();
        console.log('listening on port 5000');
    } catch (error) {
        console.log(error);
    }
})
