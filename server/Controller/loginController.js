const express=require("express");
const User=require("../Model/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const login = async(req,res)=>{

try{

const {email,password}=req.body;

const user = await User.findOne({email});

if(!user){

return res.status(404).json({
message:"User not found"
})

}

const match = await bcrypt.compare(password,user.password);

if(!match){

return res.status(400).json({
message:"Incorrect Password"
})

}

const token = jwt.sign(
    {
        id: user._id,
        role: user.role
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "1d"
    }
);

res.status(200).json({

success:true,
message:"Login Successful",
token,
user

});

}
catch(err){

res.status(500).json({
message:err.message
})

}

}

module.exports.login = login;