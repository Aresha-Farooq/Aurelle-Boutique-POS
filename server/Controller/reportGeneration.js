const Sales = require("../Model/Sales");
const Customers = require("../Model/Customer");
const Order = require("../Model/Order");
const Product = require("../Model/Product");


// =====================================================
// HELPER FUNCTION
// Sales ka Revenue, Units Sold aur Net Profit calculate
// =====================================================

const calculateSalesData = async (sales) => {

    let revenue = 0;
    let unitsSold = 0;
    let netProfit = 0;

    for (const item of sales) {

        // -----------------------------
        // Revenue
        // -----------------------------

        revenue += item.amount;


        // -----------------------------
        // Units Sold
        // -----------------------------

        unitsSold += item.quantity;


        // -----------------------------
        // Product find karo
        // -----------------------------

        const productData = await Product.findOne({
            productName: item.product
        });


        if (productData) {

            // Product ki cost
            const cost =
                productData.purchasePrice * item.quantity;


            // Profit
            netProfit += item.amount - cost;
        }
    }


    return {
        revenue,
        unitsSold,
        netProfit
    };
};


// =====================================================
// PERCENTAGE FUNCTION
// =====================================================

const calculatePercentage = (current, previous) => {

    if (previous > 0) {

        return ((current - previous) / previous) * 100;
    }

    return 0;
};


// =====================================================
// REPORT OPERATION
// =====================================================

const reportOperation = async (req, res) => {

    try {

        // =================================================
        // 1. TODAY
        // =================================================

        const today = new Date();


        // =================================================
        // 2. THIS MONTH START & END
        // =================================================

        const thisMonthStart = new Date(
            today.getFullYear(),
            today.getMonth(),
            1,
            0,
            0,
            0,
            0
        );


        const thisMonthEnd = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0,
            23,
            59,
            59,
            999
        );


        // =================================================
        // 3. LAST MONTH START & END
        // =================================================

        const lastMonthStart = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            1,
            0,
            0,
            0,
            0
        );


        const lastMonthEnd = new Date(
            today.getFullYear(),
            today.getMonth(),
            0,
            23,
            59,
            59,
            999
        );


        // =================================================
        // 4. THIS YEAR START & END
        // =================================================

        const thisYearStart = new Date(
            today.getFullYear(),
            0,
            1,
            0,
            0,
            0,
            0
        );


        const thisYearEnd = new Date(
            today.getFullYear(),
            11,
            31,
            23,
            59,
            59,
            999
        );


        // =================================================
        // 5. LAST YEAR START & END
        // =================================================

        const lastYearStart = new Date(
            today.getFullYear() - 1,
            0,
            1,
            0,
            0,
            0,
            0
        );


        const lastYearEnd = new Date(
            today.getFullYear() - 1,
            11,
            31,
            23,
            59,
            59,
            999
        );


        // =================================================
        // 6. THIS MONTH SALES
        // =================================================

        const thisMonthSales = await Sales.find({
            createdAt: {
                $gte: thisMonthStart,
                $lte: thisMonthEnd
            }
        });


        const thisMonthSalesData =
            await calculateSalesData(thisMonthSales);


        // =================================================
        // 7. LAST MONTH SALES
        // =================================================

        const lastMonthSales = await Sales.find({
            createdAt: {
                $gte: lastMonthStart,
                $lte: lastMonthEnd
            }
        });


        const lastMonthSalesData =
            await calculateSalesData(lastMonthSales);


        // =================================================
        // 8. THIS YEAR SALES
        // =================================================

        const thisYearSales = await Sales.find({
            createdAt: {
                $gte: thisYearStart,
                $lte: thisYearEnd
            }
        });


        const thisYearSalesData =
            await calculateSalesData(thisYearSales);


        // =================================================
        // 9. LAST YEAR SALES
        // =================================================

        const lastYearSales = await Sales.find({
            createdAt: {
                $gte: lastYearStart,
                $lte: lastYearEnd
            }
        });


        const lastYearSalesData =
            await calculateSalesData(lastYearSales);


        // =================================================
        // 10. ORDERS
        // =================================================

        const thisMonthOrders = await Order.countDocuments({
            orderDate: {
                $gte: thisMonthStart,
                $lte: thisMonthEnd
            }
        });


        const lastMonthOrders = await Order.countDocuments({
            orderDate: {
                $gte: lastMonthStart,
                $lte: lastMonthEnd
            }
        });


        const thisYearOrders = await Order.countDocuments({
            orderDate: {
                $gte: thisYearStart,
                $lte: thisYearEnd
            }
        });


        const lastYearOrders = await Order.countDocuments({
            orderDate: {
                $gte: lastYearStart,
                $lte: lastYearEnd
            }
        });


        // =================================================
        // 11. NEW CUSTOMERS
        // =================================================

        const thisMonthCustomers =
            await Customers.countDocuments({
                createdAt: {
                    $gte: thisMonthStart,
                    $lte: thisMonthEnd
                }
            });


        const lastMonthCustomers =
            await Customers.countDocuments({
                createdAt: {
                    $gte: lastMonthStart,
                    $lte: lastMonthEnd
                }
            });


        const thisYearCustomers =
            await Customers.countDocuments({
                createdAt: {
                    $gte: thisYearStart,
                    $lte: thisYearEnd
                }
            });


        const lastYearCustomers =
            await Customers.countDocuments({
                createdAt: {
                    $gte: lastYearStart,
                    $lte: lastYearEnd
                }
            });


        // =================================================
        // 12. MONTHLY COMPARISON
        // =================================================

        const monthlyRevenuePercentage =
            calculatePercentage(
                thisMonthSalesData.revenue,
                lastMonthSalesData.revenue
            );


        const monthlyProfitPercentage =
            calculatePercentage(
                thisMonthSalesData.netProfit,
                lastMonthSalesData.netProfit
            );


        const monthlyOrdersPercentage =
            calculatePercentage(
                thisMonthOrders,
                lastMonthOrders
            );


        const monthlyCustomersPercentage =
            calculatePercentage(
                thisMonthCustomers,
                lastMonthCustomers
            );


        // =================================================
        // 13. YEARLY COMPARISON
        // =================================================

        const yearlyRevenuePercentage =
            calculatePercentage(
                thisYearSalesData.revenue,
                lastYearSalesData.revenue
            );


        const yearlyProfitPercentage =
            calculatePercentage(
                thisYearSalesData.netProfit,
                lastYearSalesData.netProfit
            );


        const yearlyOrdersPercentage =
            calculatePercentage(
                thisYearOrders,
                lastYearOrders
            );


        const yearlyCustomersPercentage =
            calculatePercentage(
                thisYearCustomers,
                lastYearCustomers
            );


        // =================================================
        // 14. SELECTED DATE
        // =================================================

        const { date } = req.query;


        if (!date) {

            return res.status(400).json({
                success: false,
                message: "Date is required"
            });
        }


        const selectedDate = new Date(date);


        // =================================================
        // SELECTED DATE START
        // =================================================

        const startDate = new Date(selectedDate);

        startDate.setHours(
            0,
            0,
            0,
            0
        );


        // =================================================
        // SELECTED DATE END
        // =================================================

        const endDate = new Date(selectedDate);

        endDate.setHours(
            23,
            59,
            59,
            999
        );


        // =================================================
        // 15. PREVIOUS DATE
        // =================================================

        const previousDate = new Date(selectedDate);

        previousDate.setDate(
            previousDate.getDate() - 1
        );


        const previousStartDate = new Date(previousDate);

        previousStartDate.setHours(
            0,
            0,
            0,
            0
        );


        const previousEndDate = new Date(previousDate);

        previousEndDate.setHours(
            23,
            59,
            59,
            999
        );


        // =================================================
        // 16. SELECTED DATE SALES
        // =================================================

        const selectedSales = await Sales.find({
            createdAt: {
                $gte: startDate,
                $lte: endDate
            }
        });


        const selectedSalesData =
            await calculateSalesData(selectedSales);


        // =================================================
        // 17. PREVIOUS DATE SALES
        // =================================================

        const previousSales = await Sales.find({
            createdAt: {
                $gte: previousStartDate,
                $lte: previousEndDate
            }
        });


        const previousSalesData =
            await calculateSalesData(previousSales);


        // =================================================
        // 18. SELECTED DATE ORDERS
        // =================================================

        const selectedOrders =
            await Order.countDocuments({
                orderDate: {
                    $gte: startDate,
                    $lte: endDate
                }
            });


        // =================================================
        // 19. PREVIOUS DATE ORDERS
        // =================================================

        const previousOrders =
            await Order.countDocuments({
                orderDate: {
                    $gte: previousStartDate,
                    $lte: previousEndDate
                }
            });


        // =================================================
        // 20. SELECTED DATE NEW CUSTOMERS
        // =================================================

        const selectedCustomers =
            await Customers.countDocuments({
                createdAt: {
                    $gte: startDate,
                    $lte: endDate
                }
            });


        // =================================================
        // 21. PREVIOUS DATE NEW CUSTOMERS
        // =================================================

        const previousCustomers =
            await Customers.countDocuments({
                createdAt: {
                    $gte: previousStartDate,
                    $lte: previousEndDate
                }
            });


        // =================================================
        // 22. SELECTED DATE COMPARISON
        // =================================================

        const selectedRevenuePercentage =
            calculatePercentage(
                selectedSalesData.revenue,
                previousSalesData.revenue
            );


        const selectedProfitPercentage =
            calculatePercentage(
                selectedSalesData.netProfit,
                previousSalesData.netProfit
            );


        const selectedOrdersPercentage =
            calculatePercentage(
                selectedOrders,
                previousOrders
            );


        const selectedCustomersPercentage =
            calculatePercentage(
                selectedCustomers,
                previousCustomers
            );


        const selectedUnitsPercentage =
            calculatePercentage(
                selectedSalesData.unitsSold,
                previousSalesData.unitsSold
            );


        // =================================================
        // 23. TOP SELLING PRODUCTS - LAST 30 DAYS
        // =================================================

        const currentStart = new Date(today);

        currentStart.setDate(
            currentStart.getDate() - 29
        );

        currentStart.setHours(
            0,
            0,
            0,
            0
        );


        const currentEnd = new Date(today);

        currentEnd.setHours(
            23,
            59,
            59,
            999
        );


        const topProducts = await Sales.aggregate([

            // -----------------------------
            // Last 30 days
            // -----------------------------

            {
                $match: {
                    createdAt: {
                        $gte: currentStart,
                        $lte: currentEnd
                    }
                }
            },


            // -----------------------------
            // Product-wise grouping
            // -----------------------------

            {
                $group: {

                    _id: "$product",

                    unitsSold: {
                        $sum: "$quantity"
                    },

                    revenue: {
                        $sum: "$amount"
                    }

                }
            },


            // -----------------------------
            // Highest units first
            // -----------------------------

            {
                $sort: {
                    unitsSold: -1
                }
            },


            // -----------------------------
            // Top 5
            // -----------------------------

            {
                $limit: 5
            }

        ]);


        // =================================================
        // FINAL RESPONSE
        // =================================================

        res.status(200).json({

            success: true,

            message: "Report generated successfully",

            data: {

                // =========================================
                // THIS MONTH
                // =========================================

                thisMonth: {

                    totalRevenue:
                        thisMonthSalesData.revenue,

                    netProfit:
                        thisMonthSalesData.netProfit,

                    totalOrders:
                        thisMonthOrders,

                    newCustomers:
                        thisMonthCustomers,

                    unitsSold:
                        thisMonthSalesData.unitsSold,

                    comparison: {

                        revenue:
                            monthlyRevenuePercentage,

                        profit:
                            monthlyProfitPercentage,

                        orders:
                            monthlyOrdersPercentage,

                        customers:
                            monthlyCustomersPercentage
                    }
                },


                // =========================================
                // LAST MONTH
                // =========================================

                lastMonth: {

                    totalRevenue:
                        lastMonthSalesData.revenue,

                    netProfit:
                        lastMonthSalesData.netProfit,

                    totalOrders:
                        lastMonthOrders,

                    newCustomers:
                        lastMonthCustomers,

                    unitsSold:
                        lastMonthSalesData.unitsSold
                },


                // =========================================
                // THIS YEAR
                // =========================================

                thisYear: {

                    totalRevenue:
                        thisYearSalesData.revenue,

                    netProfit:
                        thisYearSalesData.netProfit,

                    totalOrders:
                        thisYearOrders,

                    newCustomers:
                        thisYearCustomers,

                    unitsSold:
                        thisYearSalesData.unitsSold,

                    comparison: {

                        revenue:
                            yearlyRevenuePercentage,

                        profit:
                            yearlyProfitPercentage,

                        orders:
                            yearlyOrdersPercentage,

                        customers:
                            yearlyCustomersPercentage
                    }
                },


                // =========================================
                // LAST YEAR
                // =========================================

                lastYear: {

                    totalRevenue:
                        lastYearSalesData.revenue,

                    netProfit:
                        lastYearSalesData.netProfit,

                    totalOrders:
                        lastYearOrders,

                    newCustomers:
                        lastYearCustomers,

                    unitsSold:
                        lastYearSalesData.unitsSold
                },


                // =========================================
                // SELECTED DATE
                // =========================================

                selectedDate: {

                    date: date,

                    revenue:
                        selectedSalesData.revenue,

                    netProfit:
                        selectedSalesData.netProfit,

                    totalOrders:
                        selectedOrders,

                    newCustomers:
                        selectedCustomers,

                    unitsSold:
                        selectedSalesData.unitsSold
                },


                // =========================================
                // PREVIOUS DATE
                // =========================================

                previousDate: {

                    date:
                        previousDate,

                    revenue:
                        previousSalesData.revenue,

                    netProfit:
                        previousSalesData.netProfit,

                    totalOrders:
                        previousOrders,

                    newCustomers:
                        previousCustomers,

                    unitsSold:
                        previousSalesData.unitsSold
                },


                // =========================================
                // SELECTED DATE COMPARISON
                // =========================================

                comparison: {

                    revenue:
                        selectedRevenuePercentage,

                    profit:
                        selectedProfitPercentage,

                    orders:
                        selectedOrdersPercentage,

                    customers:
                        selectedCustomersPercentage,

                    unitsSold:
                        selectedUnitsPercentage
                },


                // =========================================
                // TOP SELLING PRODUCTS
                // =========================================

                topSellingProducts: topProducts

            }

        });


    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }
};


module.exports = reportOperation;