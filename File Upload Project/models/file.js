const mongoose = require('mongoose');
const transporter = require('../config/transporter');

const fileSchema = new mongoose.Schema(
    {
        name:
        {
            type:String
        },
        tags:
        {
            type:String
        },
        email:
        {
            type:String
        },
        imageUrl:
        {
            type:String
        }
    });

fileSchema.post("save",async function(doc)
{
    try
    {
        console.log(doc);

    

    // send mail
    await transporter.sendMail(
        {
            from:`Full Stack Developer - Jatin Rana`,
            to:doc.email,
            subject:"New File Uploaded on Cloudinary",
            html:`<h2>New File has been successfully uploaded on Cloudinary.</h2>`
        })

    
    }
    catch(error)
    {
        console.log(error);
    }
})

module.exports = mongoose.model("File",fileSchema);
