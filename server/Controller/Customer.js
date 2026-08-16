const Customer=require("../Model/Customer");
const User=require("../Model/User");    

const createCustomer=async(req,res)=>{

    try{

        const {name,phone,email,city,address}=req.body;
        const customer=await Customer.create({name,phone,email,city,address});
        res.status(201).json({message:"Customer created successfully",customer});

    }


catch(error){
        res.status(500).json({message:error.message});
    }



}
