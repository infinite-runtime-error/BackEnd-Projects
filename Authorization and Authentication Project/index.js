// create a server
const express = require('express');
const app = express();

// loading env file into process
require('dotenv').config();

// activating server
const PORT = process.env.PORT;
app.listen(PORT,()=>
{
    console.log("App is Running at Port Number ",PORT);
})

// using body-parser middleware
app.use(express.json());

// using cookie parser
const cookie = require('cookie-parser');
app.use(cookie());

// mounting routes
const allRoutes = require('./routes/routes');
app.use("/api/v1",allRoutes);

// DB connection
const dbConnection = require('./config/dbConnection');
const cookieParser = require('cookie-parser');
dbConnection();
