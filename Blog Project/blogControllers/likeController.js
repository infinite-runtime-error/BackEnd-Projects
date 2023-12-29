const Like = require('../blogModels/likeModel');
const Post = require('../blogModels/postModel');
exports.likePost = async (req,res)=>
{
    try
    {
        const {post,user}  = req.body;

        const savedLike = await Like.create({post,user});

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{"likes":savedLike._id}},{new:true});
        res.json(
            {
                success:true,
                data:updatedPost,
                message:"Like Updated"
            })
    }
    catch(error)
    {
        return res.json(
            {
                success:false,
                message:"Error While Liking"
            })
    }
}

exports.unLikePost = async (req,res)=>
{
    try
    {
        const {post,like} = req.body;
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{"likes":deleteLike._id}},{new:true});
        res.json(
            {
                success:true,
                data:updatedPost,
                message:"Unlike Done"
            })
        
    }
    catch(error)
    {
        return res.json(
            {
                success:false,
                message:"Error While UnLiking"
            })
    }
}