// initialting Router
const express = require('express');
const router = express.Router();

// Importing Controllers
const {createComment} = require('../blogControllers/commentController');
const {createPost,getAllPosts} = require('../blogControllers/postController');
const {likePost,unLikePost} = require('../blogControllers/likeController');

// All Routes
router.post("/createComment",createComment);
router.post("/createPost",createPost);
router.get("/getAllPosts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unLikePost);

// exports Router
module.exports = router;
