const Sales = require("../Model/Sales");
const User = require("../Model/User");
const jwt = require("jsonwebtoken");

const getSalesChart = async (req, res) => {
    const salesList = await Sales.find();

    if (salesList.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No sales found"
        });
    }

    const dailySales = {};

    // Go through every sale
    salesList.forEach((sale) => {

        // Get only date
        const date = new Date(sale.date)
            .toISOString()
            .split("T")[0];

        // If date doesn't exist, create it
        if (!dailySales[date]) {
            dailySales[date] = 0;
        }

        // Add quantity
        dailySales[date] += sale.quantity;

    });

    const chartData = Object.entries(dailySales).map(
        ([date, quantity]) => ({
            date,
            quantity
        })
    );

    return res.status(200).json({
        success: true,
        message: "Daily sales fetched successfully",
        data: chartData
    });

};

module.exports = {
    getSalesChart
};