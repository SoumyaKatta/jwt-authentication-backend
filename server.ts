/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express');
const app = express();
const User = require('./src/models/User')
app.use(express.json())
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
app.get('/',(req:any,res:any)=>{
    res.json('loginn success')
})
app.post('/register',async(req:any,res:any)=>{
    const {username, email, password} = req.body;
    try{
        console.log("usermodel was")
        const user = await User.findOne({email:email})
        if(user){
         res.json("user already exists")
      }
      const hashpassword = await bcrypt.hash(password, 12)
      const newUser = await User.create({
        ...req.body,
        password:hashpassword
      })
      const token = jwt.sign({_id:newUser._id},'secretkey123',{
        expiresIn:'90d'
      })
      res.status(201).json({
        status:"success",
        message:"user registered",
        token,
      })
    }
    catch(err){
      res.json(err)
    }

})
app.post("/login",(req:any,res:any)=>{
  const {username,email,password} = req.body
})
app.listen(4000);
export default app;