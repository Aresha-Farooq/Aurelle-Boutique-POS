const Sales=require("../Model/Sales");
const createSale=async(req,res)=>{
     try {
            const Sale = await Sales.create(req.body);
    
            res.status(201).json({
                success: true,
                message: "Sale created successfully",
                data: Sale,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
module.exports = {
    createSale,
};
