const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const postroute = require('./route')
const post = require('./DB');


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log("Error",err)

});
app.use(express.json());
app.use ("/posts",postroute);
const port = process.env.PORT||5000;
app.listen(port,'127.0.0.1',()=>{
    console.log("server running on 5000 ");
});










