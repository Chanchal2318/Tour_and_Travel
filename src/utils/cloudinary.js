import { v2 as cloudinary} from "cloudinary";
import fs from 'fs';

 // Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
    

const uploadOnCloudinary = async(localFilePath) => {
    try{
        // if the user does not ent the file path tat has to be upload the we can simply return null
        if(! localFilePath){
            return null;
        }
        // But if there is a file path exist that has to upload then we will upload the file.
        // Here we sent an object along with the file path which consist of different parameters and here we use resource_type : "auto" that i automatically detects the type of the resource that has been sent like images , vedios , etc.

        const response = cloudinary.uploader.upload(localFilePath, {
            resource_type :"auto"
        })
        // file has been uploaded successfully.
        console.log("File has been uploaded successfully", response.url);
        return response;
    }
    catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;

    }
}

export {uploadOnCloudinary};