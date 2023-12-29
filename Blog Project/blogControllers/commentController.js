const Comment = require('../blogModels/commentModel');
const Post = require('../blogModels/postModel');

exports.createComment = async (req,res)=>
{

   try
   {
    const {post,user,body} = req.body;
    const savedComment = await Comment.create({post,user,body});

    const updatedPost = await Post.findByIdAndUpdate(post,{$push:{"comments":savedComment._id}},{new:true})
    .populate("comments").exec();
    ;

    res.json(
        {
            post:updatedPost
        })
   }
   catch(error)
   {
    return res.json(
        {
            error:"Error while creating comment"
        })
    }
    
}
