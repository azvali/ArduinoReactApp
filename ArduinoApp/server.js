import dotenv from 'dotenv';


const express = require('express')
const mongoose = require('mongoose')
const app = express();
dotenv.config();

const uri = process.env.MONGODB_CONNECTION_STRING;


async function connect() {
    try{
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
    } catch (error){
        console.error(error);
    }
}

connect();

app.listen(8000, () =>{
    console.log("Server started on port 8000")
})