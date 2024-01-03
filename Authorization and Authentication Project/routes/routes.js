const express = require('express');
const router = express.Router();

// import controllers
const {signup,login} = require('../controllers/Auth');
const {auth,isStudent,isAdmin} = require('../middleware/auth');

// Mapping Path to Controllers
router.post("/signup",signup);
router.post("/login",login);

// Protected routes
router.get("/test",auth,(req,res)=>
{
    res.status(200).json(
        {
            success:true,
            message:"Authentication Test Passed"
        })
})

router.get("/student",auth,isStudent,(req,res)=>
{
    return res.status(200).json(
        {
            success:true,
            message:"Welcome to Protected Route of Student"
        })
})

router.get("/admin",auth,isAdmin,(req,res)=>
{
    return res.status(200).json(
        {
            success:true,
            message:"Welcome to Protected Route of Admin"
        })
})

// exporting router
module.exports = router;
