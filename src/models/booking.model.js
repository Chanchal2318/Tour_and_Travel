import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    destinationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : ' Destination'
    },
    activityIds : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Activity'
    }],
    totalPrice : Number,
    status : {
        type : String,
        enum : ['pending','confirmed','canceled'],
        default : 'pending'
    },
    paymentStatus : {
        type : String ,
        enum : ['unpaid','paid'],
        default : 'unpaid'
    }

}, {timestamps: true})

export const Booking = mongoose.model("Booking", bookingSchema);