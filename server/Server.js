require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const authRoute = require("./Routes/authRoute");
const orderRoute=require("./Routes/orderRoutes");
const salesRoute=require("./Routes/salesRoute");
const productRoutes=require("./Routes/productRoutes");  
const app=express();
const port=3000;
app.use(express.json());
app.use("/auth", authRoute);
app.use("/api", orderRoute);
app.use("/api", productRoutes);
app.use("/api", salesRoute);
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
