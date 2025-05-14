import mongoose from "mongoose";

const destinationSchema = new mongoose.model({
    name:{
        type:String,
        required : true,
        imageUrls : [String],
        location : String,
        isFeatured : {
            type : String,
            default : true
        }
    }

},{timestamps : true})

export const Destination = mongoose.model("Destination",destinationSchema);