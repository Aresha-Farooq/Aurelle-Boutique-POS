const Order = require("../Model/Order");
const User = require("../Model/User");
const jwt = require("jsonwebtoken");

const orderOperations = async (req, res) => {
    try {

        // =========================
        // 1. TOKEN CHECK
        // =========================

    

        const user_id = req.user.id;


        // =========================
        // 5. GET ALL ORDERS
        // =========================

        const Orders = await Order.find();

        const totalOrders = Orders.length;


        // =========================
        // 6. COUNTERS
        // =========================

        let complete = 0;
        let pending = 0;
        let inStitching = 0;

        let completedToday = 0;
        let dueToday = 0;
        let inStitchingToday = 0;

        // Monthly percentage counters
        let currentMonthCompleted = 0;
        let previousMonthCompleted = 0;

        let dailyOrders = 0;
        let weeklyOrders = 0;
        let monthlyOrders = 0;
        let yearlyOrders = 0;
        // =========================
        // 7. TODAY'S DATE
        // =========================

        const today = new Date();
        const day=today.getDay();


        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();


      

// Monday tak kitne din peeche jana hai?
const diff = day === 0 ? 6 : day - 1;

// Current week ka Monday
const weekStart = new Date(today);
weekStart.setDate(today.getDate() - diff);
weekStart.setHours(0, 0, 0, 0);

// Current week ka Sunday
const weekEnd = new Date(weekStart);
weekEnd.setDate(weekStart.getDate() + 6);
weekEnd.setHours(23, 59, 59, 999);

        const previousMonth = currentMonth === 0
            ? 11
            : currentMonth - 1;

        const previousMonthYear = currentMonth === 0
            ? currentYear - 1
            : currentYear;


        // =========================
        // 8. CHECK EVERY ORDER
        // =========================

        Orders.forEach((order) => {

            // =========================
            // COMPLETED
            // =========================

            if (order.status === "Completed") {

                ++complete;

                if (order.completedAt) {

                    const completedDate = new Date(
                        order.completedAt
                    );


                    // -------------------------
                    // COMPLETED TODAY
                    // -------------------------

                    if (
                        completedDate.getDate() === today.getDate() &&
                        completedDate.getMonth() === today.getMonth() &&
                        completedDate.getFullYear() === today.getFullYear()
                    ) {
                        ++completedToday;
                    }


                    // -------------------------
                    // CURRENT MONTH COMPLETED
                    // -------------------------

                    if (
                        completedDate.getMonth() === currentMonth &&
                        completedDate.getFullYear() === currentYear
                    ) {
                        ++currentMonthCompleted;
                    }


                    // -------------------------
                    // PREVIOUS MONTH COMPLETED
                    // -------------------------

                    else if (
                        completedDate.getMonth() === previousMonth &&
                        completedDate.getFullYear() === previousMonthYear
                    ) {
                        ++previousMonthCompleted;
                    }
                }
            }


            // =========================
            // PENDING
            // =========================

            else if (order.status === "Pending") {

                ++pending;

                if (order.dueDate) {

                    const dueDate = new Date(
                        order.dueDate
                    );

                    if (
                        dueDate.getDate() === today.getDate() &&
                        dueDate.getMonth() === today.getMonth() &&
                        dueDate.getFullYear() === today.getFullYear()
                    ) {
                        ++dueToday;
                    }
                }
            }


            // =========================
            // IN STITCHING
            // =========================

            else if (order.status === "In Stitching") {

                ++inStitching;

                if (order.stitchingStartedAt) {

                    const stitchingDate = new Date(
                        order.stitchingStartedAt
                    );

                    if (
                        stitchingDate.getDate() === today.getDate() &&
                        stitchingDate.getMonth() === today.getMonth() &&
                        stitchingDate.getFullYear() === today.getFullYear()
                    ) {
                        ++inStitchingToday;
                    }
                }
            }
            // Orders
             // =========================
// ORDERS DATE COUNTS
// =========================

Orders.forEach((order) => {

    const orderDate = new Date(order.createdAt);


    // =========================
    // TODAY
    // =========================

    if (
        orderDate.getDate() === today.getDate() &&
        orderDate.getMonth() === today.getMonth() &&
        orderDate.getFullYear() === today.getFullYear()
    ) {
        ++dailyOrders;
    }


    // =========================
    // THIS WEEK
    // =========================

    if (
        orderDate >= weekStart &&
        orderDate <= weekEnd
    ) {
        ++weeklyOrders;
    }


    // =========================
    // THIS MONTH
    // =========================

    if (
        orderDate.getMonth() === currentMonth &&
        orderDate.getFullYear() === currentYear
    ) {
        ++monthlyOrders;
    }


    // =========================
    // THIS YEAR
    // =========================

    if (
        orderDate.getFullYear() === currentYear
    ) {
        ++yearlyOrders;
    }
});
});


        // =========================
        // 9. MONTHLY PERCENTAGE
        // =========================

        let completedPercentage = 0;

        if (previousMonthCompleted > 0) {

            completedPercentage =
                (
                    (currentMonthCompleted - previousMonthCompleted)
                    / previousMonthCompleted
                ) * 100;
        }


        // =========================
        // 10. RESPONSE
        // =========================

        return res.status(200).json({

    success: true,

    message: "Orders fetched successfully",

    totalOrders: totalOrders,

    dailyOrders: dailyOrders,

    weeklyOrders: weeklyOrders,

    monthlyOrders: monthlyOrders,

    yearlyOrders: yearlyOrders,

    pendingOrders: pending,

    dueToday: dueToday,

    inStitchingOrders: inStitching,

    inStitchingToday: inStitchingToday,

    completedOrders: complete,

    completedToday: completedToday,

    completedPercentage:
        Number(completedPercentage.toFixed(1))
});
    }
    catch (error) {

        console.error(
            "Error occurred while processing order operations:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = orderOperations;