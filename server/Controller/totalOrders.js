const orders = require("../Model/Order");
const User = require("../Model/User");
const jwt = require("jsonwebtoken");

const totalOrders = async (req, res) => {
    try {

        // Get token
        const token = req.headers.authorization.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user_id = decoded.id;
        const role = decoded.role;

        // Counters
        let completed = 0;
        let pending = 0;
        let total = 0;

        // Check owner
        if (role === "owner") {

            // ID null check
            if (!user_id) {
                return res.status(400).json({
                    success: false,
                    message: "null id"
                });
            }

            // Find owner
            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });
            }

            // Get ALL orders
            const orderList = await orders.find();

            // No orders
            if (orderList.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No orders found"
                });
            }

            // Count all orders
            total = orderList.length;

            // Check every order
            for (const order of orderList) {

                if (order.status === "Completed") {
                    completed++;
                }

                if (order.status === "Pending") {
                    pending++;
                }
            }

            // Send ALL data
            return res.status(200).json({
                success: true,
                message: "Orders found",

                total: total,

                completed: completed,

                pending: pending,

                data: orderList
            });
        }

        // If role is not owner
        return res.status(403).json({
            success: false,
            message: "Owner access required"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    totalOrders
};