import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// configuration of cors
// use() is used for the middleware or the configuration part

app.use(cors({
    origin : process.env.CORS_ORIGIN, // we use this to ensure that what kind of request we will handle , CORS_ORIGIN = * means we can allow request from anywhere and we are able to handle it

    credentials: true // It means we allow an access to credentials.
}));


// It defines that we can accept the json type of data sent by the user along with its limit.
app.use(express.json({limit:"16kb"}))

// It is used to accept the data comes from an url as it consist of information in different form , basically used for encoding the information from the url.

app.use(express.urlencoded({extended:true, limit:"16kb"})) 
// Here , We use extended : true as a parameter for the nested objects (getting objects inside an object).


// Sometimes , to store data statically on the public folder.
app.use(express.static("public"))


app.use(cookieParser); // It is used to enable parsing of cookies from incoming HTTP requests. 
// It means that when a client (like a browser) sends a request to your server with cookies, the cookie-parser middleware automatically reads those cookies and makes them easily accessible in your server code through req.cookies, instead of you manually extracting and decoding them.


export {app};