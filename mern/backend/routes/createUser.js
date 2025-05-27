const express=require('express');
const User = require('../model/User');
const Router=express.Router();


Router.post("/createUser", async(req,res)=>
{
    try{
        User.create(
            {
              name:"sp",
               password:"sp12",
              email:"sp@gmail",
             location:"ujjain",

            }
        )
        res.json({success:true});
    }
    catch(err){
 console.log(err);
    }
})

module.exports=Router;