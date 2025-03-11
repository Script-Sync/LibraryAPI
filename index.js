import express from "express";
import mongoose from "mongoose";
import booksRouter from "./routes/LibRoute.js";

//create an express app
const app = express();

//Database connection
await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err)
});

//Use Global middleware
app.use(express.json()); 

//Use Routes
app.use('/', booksRouter);

//Server is listening
app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
})