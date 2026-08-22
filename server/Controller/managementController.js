const Management=require("../Model/Management");
const salesManagement=async(req,res)=>{
    try{
const Staff=await Management.create(req.body);
 res.status(201).json({message:"Staff created successfully",Staff});
    }
    catch(error){
res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const salesOperations=async(req,res)=>{
   try{

      const Staff=await Management.find();
      const totalStaff=Staff.length;
      let salesStaff=0;
      let managers=0;
      let tailors=0;
      let cashier=0;
      let receptionist=0;
      Staff.forEach((item)=>{
       if(item.role==="Manager")
       {
          managers++;
       }
       else if(item.role==="salesStaff"){
          ++salesStaff;
       }
       else if(item.role==="Tailor"){
          tailors++;
       }
       else if(item.role==="Cashier"){
          ++cashier;
       }
       else if(item.role==="Receptionist"){
          ++receptionist;
       }
      })
     const active=await Management.find({
      employmentStatus:"Active"
     })
  const totalActive=active.length;
  
  const leave=await Management.find({
      employmentStatus:"On Leave"
  })
  const totalLeave= leave.length;
   }
   catch(error){
      res.status(500).json({
            success: false,
            message: error.message
        });
   }
}
module.exports={salesManagement,salesOperations};