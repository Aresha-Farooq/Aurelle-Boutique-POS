const Order = require("../Model/Order");

const createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);

        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createOrder,
};