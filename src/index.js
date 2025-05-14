
import dotenv from "dotenv";
import connectDB from "./db/index.js";



// path is given to the dotenv show that it can easily find where env file exist

dotenv.config({
    path:"./env"
})


connectDB()
.then(() => {
    app.on("error",(err)=>{
        console.log("ERROR :",err);
        throw err;
    })
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB connection failed !!!",err);
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