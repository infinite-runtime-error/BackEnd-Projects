// Creating Server
const express = require('express');
const app = express();

// importing required files
const allRoutes = require('./routes/routes');
const dbConnection = require('./config/dbConnection');

// Loading env file into process
require('dotenv').config();
const PORT = process.env.PORT;

// Activating Server
app.listen(PORT,()=>
{
    console.log("App is Running at Port Number",PORT);
})

// Body-Parser to fetch data from Request
app.use(express.json());

// File Uplaod Parser to fetch file from request ki body
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// Mounting Routes Routes
app.use("/api/v1",allRoutes);


// Database Connection
dbConnection();

// Cloudinary Connection
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();



