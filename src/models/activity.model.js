import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    title : {
        type : String , 
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    destinationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Destination'
    },
    imageUrls : [String],
    price : Number,
    duration : {
        type : String,
        required : true
    },
    isFeatured : {
        type : Boolean,
        default : false
    }
}, {timestamps:true})

export const Activity = new mongoose.model("Activity",activitySchema)