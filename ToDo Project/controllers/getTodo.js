const todoSchema = require('../models/todoSchema');

exports.getTodo = async (req,res)=>
{
   try
   {
     // fetch all todos from db
     const todos = await todoSchema.find({});
     // response
     res.status(200).json
     (
         {
             success:true,
             data:todos,
             message:"Entire Todo Data Is Fetched"
         }
     )
   }
   catch(error)
   {
    console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
   }
}

exports.getTodoById = async (req,res)=>
{
    try
    {
        // extract todo based on id
        const id = req.params.id;
        const todo = await todoSchema.findById({_id:id});

        // response not found
        if(!todo)
        {
            return res.status(404).json({
                success:false,
                message:"No Data Found woth Given Id",
            })
        }

        // response found
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data successfully fetched`,
           })

           
           
    }
    catch(error)
    {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    
    }
}

