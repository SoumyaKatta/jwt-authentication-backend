/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express');
const app = express();
const Users = require('./src/models/User')
app.use(express.json())
app.get('/',(req:any,res:any)=>{
    res.json('loginn success')
})
app.listen(4000);
export default app;