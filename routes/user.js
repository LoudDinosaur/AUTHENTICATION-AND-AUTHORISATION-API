const express = require("express");
const router = express.Router();

const User = require("../model/user")

const {login , signup} = require("../controllers/auth");
const {auth , isStudent , isAdmin} = require("../middlewares/auth");

router.post("/login" , login);
router.post("/signup" , signup);

//random route with single middleware for testing
router.get("/test" , auth, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the protected route for Testing',
    });
});

//Protected Route
router.get("/student" , auth , isStudent , (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected Route for Students',
    });
});

router.get("/admin" , auth , isAdmin , (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected Route for Admin',
    });
});


router.get("/getEmail" , auth, async (req,res) => {
    //payload apne aap add ho jayega when auth middleware chlega as usme defined hai
    try{
        const id = req.user.id;  
        const  user = await User.findById(id); 

        res.status(200).json({
            success:true,
            user:user,
            message:'Welcome to the email route',
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
            message:'Fatt gaya code',
        });
    }

});
module.exports = router;