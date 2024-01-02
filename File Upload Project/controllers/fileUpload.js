const File = require('../models/file');
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req,res)=>
{
    try
    {
        // fetch data and file from request ki body
        const {name,tags,email} = req.body;
        const file = req.files.file;
        // console.log("File is ",file);

        // path to store file
        const path = __dirname + "/files/" + Date.now() +`.${file.name.split('.')[1].toLowerCase()}`;
        
        // save file to this path
        file.mv(path , (error) => 
        {
            console.log("Error faced while Uploading File to Local Storage is : ",error);
        });
        
        // File uploaded to local Storage Successfully
        res.status(200).json(
            {
                success:true,
                message:"File Uploaded to Local Storage Successfully"
            })
    }
    catch(error)
    {
        return res.status(400).json(
            {
                success:false,
                message:"Unable to Upload File to Local Storage"
            })
    }
}

async function isFileSupported(supportedFiles,myFileType)
{
    return supportedFiles.includes(myFileType);
}

async function uploadFileToCloudinary(file,folder,quality)
{
    const options = {folder};
    if(quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req,res)=>
{
    try
    {
        // fetching file and data from request ki body
        const {name,tags,email} = req.body;
        const file = req.files.imageFile;
        console.log("Image File is ",file);

        // check if file is supported or not (Validation Check)
        const supportedFiles = ["png",'jpeg','jpg'];
        const myFileType = file.name.split('.')[1].toLowerCase();
        if(!isFileSupported(supportedFiles,myFileType))
        {
            return res.status(400).json(
                {
                    success:false,
                    message:"File Type Not Supported"
                })
        }

        console.log("If We have reached till here,that menas File Type is Supported");

        const response = await uploadFileToCloudinary(file,"January");
        console.log("Response is : ",response);

        // create entry in db
        await File.create(
            {
                name:name,
                tags:tags,
                email:email,
                imageUrl:response.secure_url
            })

        // image file uploaded
        res.status(200).json(
            {
                success:true,
                imageUrl:response.secure_url,
                message:"Image File Uploaded to Cloudinary and Entry Created in DB"
            })
    }
    catch(error)
    {
        return res.status(400).json(
            {
                success:false,
                message:"Unable to Upload Image to Cloudinary"
            })
    }
}

exports.videoUpload = async (req,res)=>
{
    try
    {
        // fetching file and data from request ki body
        const {name,tags,email} = req.body;
        const file = req.files.videoFile;
        console.log("Video File is ",file);

        // check if file is supported or not (Validation Check)
        const supportedFiles = ["mp4",'mov'];
        const myFileType = file.name.split('.')[1].toLowerCase();
        if(!isFileSupported(supportedFiles,myFileType))
        {
            return res.status(400).json(
                {
                    success:false,
                    message:"File Type Not Supported"
                })
        }

        console.log("If We have reached till here,that menas File Type is Supported");

        const response = await uploadFileToCloudinary(file,"January");
        console.log("Response is : ",response);

        // create entry in db
        await File.create(
            {
                name:name,
                tags:tags,
                email:email,
                imageUrl:response.secure_url
            })

        // image file uploaded
        res.status(200).json(
            {
                success:true,
                imageUrl:response.secure_url,
                message:"Video File Uploaded to Cloudinary and Entry Created in DB"
            })
    }
    catch(error)
    {
        return res.status(400).json(
            {
                success:false,
                message:"Unable to Upload Video to Cloudinary"
            })
    }
}

exports.imageSizeReducer = async (req,res)=>
{
    try
    {
        // fetching file and data from request ki body
        const {name,tags,email} = req.body;
        const file = req.files.imageFile;
        console.log("Image File is ",file);

        // check if file is supported or not (Validation Check)
        const supportedFiles = ["jpeg","jpg","png"];
        const myFileType = file.name.split('.')[1].toLowerCase();
        if(!isFileSupported(supportedFiles,myFileType))
        {
            return res.status(400).json(
                {
                    success:false,
                    message:"File Type Not Supported"
                })
        }

        console.log("If We have reached till here,that menas File Type is Supported");

        const response = await uploadFileToCloudinary(file,"January",50);
        console.log("Response is : ",response);

        // create entry in db
        await File.create(
            {
                name:name,
                tags:tags,
                email:email,
                imageUrl:response.secure_url
            })

        // image file uploaded
        res.status(200).json(
            {
                success:true,
                imageUrl:response.secure_url,
                message:"Image File Reduced Successfully and Uploaded to Cloudinary and Entry Created in DB"
            })
    }
    catch(error)
    {
        return res.status(400).json(
            {
                success:false,
                message:"Unable to Reduce size of Image File to Cloudinary"
            })
    }
}
