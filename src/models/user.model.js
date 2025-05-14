import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        username : {
          type :String,
          required : true,
          unique : true,
          lowercase : true,
          trim : true,
          index : true
        },
        email : {
          type : String,
          required : true,
          unique:true
        },
        password : {
            type : String,
            required : true
        },
        role:{
            type : String,
            enum : ['user', 'admin'],
            default : 'user'
        },
        phone:{
            type : String
        },
    },{timestamps:true})

export const User = mongoose.model("User",userSchema);