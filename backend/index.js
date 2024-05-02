// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import compression from 'compression'; 
import { app,server } from "./socket/socket.js";
dotenv.config({});

 
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:3000',
    credentials:true
};
app.use(cors(corsOption)); 




// Sanitize request data against NoSQL injection attacks
app.use(mongoSanitize()); 

// Sanitize user input to prevent XSS attacks
app.use(xss()); 

// Define a rate limiter with a maximum of 100 requests per hour
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later'
  });

// Apply the rate limiter to all requests
app.use(limiter);

// Enable gzip compression middleware
app.use(compression());
 

// routes
app.use("/api/v1/user",userRoute); 
app.use("/api/v1/message",messageRoute);
 
app.post("/api/v1/onlineuser",async(req,res)=>{
    try {
        console.log(req.body);
        console.log("hello dosto");
        res.status(200).json("data save ho gaya")
    } catch (error) {
        console.log(error);
        
    }
})

server.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});

