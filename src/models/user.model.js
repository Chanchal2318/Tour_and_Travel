import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";

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
        refreshToken:{
          type:String
        }
    },{timestamps:true})

// Here , pre()hook is a middleware which do something (or check something) before the work has been done . Like here , before saving we encrypt the password.

// Here , we are using encrypting the password only when we are saving the password for the first time or we are doing an updation in the password.


userSchema.pre("save",async function(next){
  // Here , we are checking that if the password is not modified then return next.

  if(! this.isModified("password")) return next();
  // Here , if the password is modified then the password must be encrypted.

  this.password = bcrypt.hash(this.password,10)
  next()
  // here, 10 is the saltround
})


// This is used to compare password duing the validation whether it is same as the password saved in the database or not.

userSchema.methods.isPasswordCorrect = async function (password){
  return await bcrypt.compare(password , this.password)
}

// Way to generate access token
userSchema.methods.generateAccessToken = function() {
  return jwt.sign(
    // Payload
    {
       _id: this._id,
       email:this.email,
       username : this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY 
    }
  )
}


// Way to generate refresh token
userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
    {
      _id : this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

// Way to generate refresh token
userSchema.methods.generateRefreshToken = function() {}

export const User = mongoose.model("User",userSchema);