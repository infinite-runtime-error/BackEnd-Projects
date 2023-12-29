const Post = require('../blogModels/postModel');


exports.createPost = async (req,res)=>
{
    try
    {
        const {title,body} = req.body;

    const savedPost = await Post.create({title,body});

    res.json(
        {
            success:true,
            data:savedPost,
            message:"Post Saved In DB"
        })
    }
    catch(error)
    {
        return res.json(
            {
                success:false,
                message:"Unable to create post"
            })
    }
}

exports.getAllPosts = async (req,res)=>
{
    try
    {
        const allPosts = await Post.find();
        res.json(
            {
                success:true,
                data:allPosts
            })
    }
    catch(error)
    {
        return res.json(
            {
                success:false,
                message:"Unable to fetch all posts"
            })
    }
}