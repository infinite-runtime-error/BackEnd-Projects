const express = require('express');
const router = express.Router();

// Importing Controllers
const {localFileUpload,imageUpload,videoUpload,imageSizeReducer} = require('../controllers/fileUpload');

// Mapping path to Controllers 
router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);
router.post("/videoUpload",videoUpload);
router.post("/imageSizeReducer",imageSizeReducer);

// exporting Router
module.exports = router;
