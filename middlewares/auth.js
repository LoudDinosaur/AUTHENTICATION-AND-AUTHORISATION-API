
//authentication , isStudent , isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res,next) => {
    try{
        //extract jwt token
        //pending other ways to fetch token

        console.log("cookie", req.cookies.token);
        console.log("body", req.body.token);
        console.log("header", req.header("Authorization"));

        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer " , "");

        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }

        //verify the token
        try{
            const payload = jwt.verify(token , process.env.JWT_SECRET);
            console.log(payload);

            req.user = payload; //this is very important line isme payload ko store kr liya hai
            //req.user ki key ke andar payload ko store kar liya hai
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:'Token is Invalid',
            });
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token'
        });
    }
}


exports.isStudent = (req,res,next) =>{
    try{
        if(req.user.role !=="Student"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for students',
            })
        }
        next(); //next middleware par jao
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'User role is not matching'
        });
    }
}

exports.isAdmin = (req,res,next) =>{
    try{
        if(req.user.role !=="Admin"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for Admin',
            })
        }
        next(); //next middleware par jao
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'User role is not matching'
        });
    }
}