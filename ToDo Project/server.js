// Creating a server
const express = require('express');
const app = express();

// Maaking server live on a port
require('dotenv').config();
const PortNo = process.env.PORT;
app.listen(PortNo,()=>
{
    console.log("Server Started at Port Number "+PortNo);
})

app.get('/',(req,res)=>
{
    res.send(`<h1>Hello Jee</h1>`);
})

//default Route
// app.get("/", (req,res) => {
//     res.send(`<h1> This is HOMEPAGE baby</h1>`);
// })

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const todoRoutes = require('./routes/routes');
app.use("/api/v1",todoRoutes);

const connection = require('./config/databaseConnection');
connection();
