// Make a Server
const express = require('express');
const app = express();
// it loads .env file into process
require('dotenv').config();

// it establishes Connection with Database
const connection = require('./config/dbConnection');

// importing all Routes
const allRoutes = require('./routes/routes');

// Mounting Routes
app.use("/api/v1",allRoutes);

// Using Body-Parser 
app.use(express.json());

// Making server live on PORT
const PORT = process.env.PORT;
app.listen(PORT,()=>
{
    console.log(`BackEnd Server is Running at Port Number ${PORT}`);
});
