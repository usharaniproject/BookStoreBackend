// const express=require('express');
import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from './rout/bookRoute.js';
import userRoute from './rout/userRoute.js';
dotenv.config();
//const URI = process.env.MongoDBURI || "mongodb://localhost:27017/bookStrore";
const URI=process.env.MongoDBURI || "mongodb://localhost:27017/bookStore"
const app=express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;  
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    
    });
    console.log('Connected to Db');
}catch(error){
    console.log('Error:',error);
}
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.listen(PORT,()=>
{
    console.log(`server is running on ${PORT}`);
})

