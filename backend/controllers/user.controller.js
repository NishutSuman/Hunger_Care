const express= require('express');
const User = require('../models/users.model');

const router= express.Router();

router.post("/", async(req,res)=>{
    try {
        const user= await User.create(req.body);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})
router.get("/", async(req,res)=>{
    try {
        const users= await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})
router.delete("/:id", async(req,res)=>{
    try {
        const user= await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

module.exports = router;