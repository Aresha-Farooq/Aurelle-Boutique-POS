require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const authRoute = require("./Routes/authRoute");
const orderRoute=require("./Routes/orderRoutes");
const salesRoute=require("./Routes/salesRoute");
const productRoutes=require("./Routes/productRoutes");  
const tailorRoutes=require("./Routes/tailorRoute");
const CustomerRoutes=require("./Routes/customerRoute");
const StaffRoute=require("./Routes/StaffRoute")
const reportRoute=require("./Routes/reportRoute");
const app=express();
const port=3000;
app.use(express.json());
app.use("/auth", authRoute);
app.use("/api", orderRoute);
app.use("/api", productRoutes);
app.use("/api", salesRoute);
app.use("/api", CustomerRoutes);
app.use("/api", reportRoute);
app.use("/api", tailorRoutes);
app.use("/api", StaffRoute);
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Successfully Connected!");
}).catch((err)=>{
    console.log("Error occured",err);
})
app.get('/',(req,res)=>{
    res.send("Hello!")
})
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})
