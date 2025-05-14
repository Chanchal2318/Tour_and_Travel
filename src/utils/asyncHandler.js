// Function with the help of promise.
const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler} 


/*
Extended way of writing the below code as It is a higher order function (HOF are those which accepts a function as a parameter or returns the function)

const asyncHandler = () => {}
const asyncHandler = (fn) => () => {}
const asyncHandler = (fn) => async() => {}    

*/

// Function with the help of try and catch.

// const asyncHandler = (fn) => async(req,res,next) => {
//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             success: false,
//             message : err.message
//         })
//     }
// }