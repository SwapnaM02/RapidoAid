const User = require("../model/userModel");
const jwt = require('jsonwebtoken');

const registerUser = async(req,res) => {
        try{
            const userExists = await User.findOne({email:req.body.email});
            if(userExists){
                return res.send({success:false,message:"User already exists"});
            }
            const newUser = await new User(req.body);
            await newUser.save();
            res.send({success:true,message:"Registration Successful, please login"});
        }catch(err){
            res.send({success:false,message:"User is not able to register"});
        }
    }

const loginUser =async(req,res)=>{
        try{
            const user = await User.findOne({email:req.body.email});
            if(!user){
                res.send({success:false,message:"user doesn't exist.Please register"})
            }
            const token = jwt.sign({userId:user._id},process.env.jwt_secret,{expiresIn:"1d"});
            res.send({success:true,message:"User logged in successfully",data:token,loginuser:user});

        }catch(error){
            res.status(500).send({
                success:false,
                message:"An error occurred.Please try again later."
            })
        }
    }
const getCurrentUser = async(req,res)=>{
    const user = await User.findById(req.body.userId).select("-password");
    res.send({success:true,message:"You are authorised to go to protected route",data:user});
}

module.exports = {
        registerUser,
        loginUser,
        getCurrentUser,
        
};