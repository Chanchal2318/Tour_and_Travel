import multer from "multer";

// Here , we are using diskStorage instead of memoryStorage because if we get a very heavy file than it might be possible that our memoryStorage is getting full.

const storage = multer.diskStorage({
    destination : function(req, file ,cb){
        cb(null,'./public/temp')
    },
    filename : function(req,file ,cb){
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage  })