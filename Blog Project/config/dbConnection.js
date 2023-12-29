// initiating mongoose to build DB Connection
const mongoose = require('mongoose');


require('dotenv').config();

const connection = mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    // It returns a promise
    .then(()=>
    {
        console.log("Connection with DataBase Successfull");
    })
    .catch((error)=>
    {
        console.log("Could Not Build Connection with DB");
    })

module.exports = connection;
