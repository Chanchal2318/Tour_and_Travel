// This code defines a custom error class ApiError that extends the built-in Error class in JavaScript. It is typically used in Node.js/Express APIs to handle errors in a consistent and structured way.

// 1. ApiError is a custom error class that inherits from JavaScript's built-in Error class.

/* 2. The constructor takes four parameters:

statusCode: HTTP status code (like 404, 500, etc.).

message: Error message to describe the issue.

errors: An optional array to store detailed error objects/messages.

stack: Optional stack trace for debugging.

*/

// 3. Calls the parent Error class constructor with the message.

/*

4.
If a stack trace is provided, it assigns it.

If not, it generates a new stack trace using Error.captureStackTrace, which helps with debugging.

*/

class ApiError extends Error{
    constructor(
        statusCode,
        message = "Somethig went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}