const todoSchema = require('../models/todoSchema');

exports.deleteTodo = async(req,res)=>
{
    try
    {
        const {id} = req.params;
        await todoSchema.findByIdAndDelete(id);

        res.json(
            {
                success:true,
                message:"Todo Deleted"
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