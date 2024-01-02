const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = ()=>
{
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then(()=>
        {
            console.log("Connection with Database Successfull");
        })
        .catch((error)=>
        {
            console.log("Connection with Database Failed");
        })
}

module.exports = dbConnection;