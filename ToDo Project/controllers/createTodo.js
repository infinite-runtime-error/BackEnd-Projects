// import model
const todoSchema = require('../models/todoSchema');

exports.createTodo = async (req,res)=>
{
    try
    {
        // extract info from request ki body
        const {title,description} = req.body;
        // create new todo object and insert in db
        const response = await todoSchema.create({title,description});
        // send respond with flag
        
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:"Entry Created in DB Successfully"
                })
    }
    catch(error)
            {
                console.log(error);
                res.status(500).json(
                    {
                        success:false,
                        data:"Internal Server Errror,No Data found in DB",
                        message:"Internal Server Error"
                    })
            }
}

