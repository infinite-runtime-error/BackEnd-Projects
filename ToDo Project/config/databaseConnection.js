const mongoose = require('mongoose');
require('dotenv').config();
 const dbConnect = ()=>
{
    mongoose.connect(process.env.DATABASE_URL,
    {
        useNewurlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>
    {
        console.log("Connection Establised with Database Successfully");
    })
    .catch((error)=>
    {
        console.log("Error in Connection with Database");
    })
}

module.exports = dbConnect;
