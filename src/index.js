
import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB()

// path is given to the dotenv show that it can easily find where env file exist

dotenv.config({
    path:"./env"
})






// 1 approach to connect database

/*
import express from "express";
const app = express();

(async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // This error occur when app is not working properly.
       app.on("error",(err) => {
        console.log("ERROR :",err);
        throw err;
       })
       app.listen(process.env.PORT,() => {
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    }
    catch(err){
        console.error("ERROR :",err)
        throw err;
    }

})()  */