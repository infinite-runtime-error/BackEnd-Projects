const todoSchema = require('../models/todoSchema');

exports.updateById = async (req,res)=>
{
   try
   {
     // extract id and info to be updated from request ki body
     const {id} = req.params;
     const {title,description} = req.body;
 
     // update todo
     const todo = await todoSchema.findByIdAndUpdate(
         {_id:id},
         {title,description,updatedAt:Date.now()});
 
     // response
     res.status(200).json(
         {
             success:true,
             data:todo,
             message:"Updated Successfully"
         });
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