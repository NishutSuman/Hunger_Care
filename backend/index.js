const express= require('express');
const cors= require('cors');
const connectDB= require('./configs/db');
const productController= require("./controllers/products.controller")
const userController= require("./controllers/user.controller");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productController);
app.use("/users", userController);

app.listen(5000, async()=>{
    try {
        await connectDB();
        console.log('listening on port 5000');
    } catch (error) {
        console.log(error);
    }
})
