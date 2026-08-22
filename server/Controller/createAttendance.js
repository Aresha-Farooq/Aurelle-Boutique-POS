const Attendance=require("../Model/Attendance");
const createAttendance=async(req,res)=>
{
    try{
        const allAttendace=await Attendance.create(req.body);
       res.status(201).json({
                success: true,
                message: "Sale created successfully",
                data: Sale,
            });
    }
catch(errror){
    res.status(500).json({
                success: false,
                message: error.message,
            });
}
}
const attendanceOperations=async(req,res)=>{
    try{

let present=0;
let absent=0;
let on_leave=0;
let late=0;
const Staff=await Attendance.find();
 Staff.forEach((staff)=>{
if(staff.status==="Absent"){
    absent++;
}
else if(staff.status==="Late"){
    late++;
}
else if(staff.status==="Leave"){
    on_leave++;
}
else if(staff.status==="present"){
    present++;
}
})

    }
    catch(errror){
    res.status(500).json({
                success: false,
                message: error.message,
            });
        }
}