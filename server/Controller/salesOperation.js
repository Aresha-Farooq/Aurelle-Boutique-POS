const Sales = require("../Model/Sales");

const salesOperations = async (req, res) => {
    try {

        // ==========================================
        // 1. GET ALL SALES
        // ==========================================

        const AllItems = await Sales.find();

        if (AllItems.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Sales found"
            });
        }


        // ==========================================
        // 2. TODAY'S DATE
        // ==========================================

        const today = new Date();

        const todayStart = new Date(today);
        todayStart.setHours(0, 0, 0, 0);

        const todayEnd = new Date(today);
        todayEnd.setHours(23, 59, 59, 999);


        // ==========================================
        // 3. THIS WEEK START & END
        // Monday → Sunday
        // ==========================================

        const day = today.getDay();

        // Sunday = 0
        // Monday = 1
        // ...
        // Saturday = 6

        const diff = day === 0 ? 6 : day - 1;

        const thisWeekStart = new Date(today);

        thisWeekStart.setDate(today.getDate() - diff);
        thisWeekStart.setHours(0, 0, 0, 0);

        const thisWeekEnd = new Date(thisWeekStart);

        thisWeekEnd.setDate(thisWeekStart.getDate() + 6);
        thisWeekEnd.setHours(23, 59, 59, 999);


        // ==========================================
        // 4. LAST WEEK START & END
        // ==========================================

        const lastWeekStart = new Date(thisWeekStart);

        lastWeekStart.setDate(thisWeekStart.getDate() - 7);
        lastWeekStart.setHours(0, 0, 0, 0);

        const lastWeekEnd = new Date(thisWeekStart);

        lastWeekEnd.setDate(thisWeekStart.getDate() - 1);
        lastWeekEnd.setHours(23, 59, 59, 999);


        // ==========================================
        // 5. VARIABLES
        // ==========================================

        let thisweekTransaction = 0;
        let lastweekTransaction = 0;

        let thisWeekSales = 0;
        let lastWeekSales = 0;


        // ==========================================
        // 6. THIS WEEK & LAST WEEK SALES
        // ==========================================

        AllItems.forEach((item) => {

            const saleDate = new Date(item.createdAt);

            // This Week
            if (
                saleDate >= thisWeekStart &&
                saleDate <= thisWeekEnd
            ) {
                thisWeekSales += item.amount;
                thisweekTransaction++;
            }


            // Last Week
            if (
                saleDate >= lastWeekStart &&
                saleDate <= lastWeekEnd
            ) {
                lastWeekSales += item.amount;
                lastweekTransaction++;
            }

        });


        // ==========================================
        // 7. WEEKLY AVERAGE
        // ==========================================

        const thisWeekAverage =
            thisweekTransaction > 0
                ? thisWeekSales / thisweekTransaction
                : 0;

        const lastWeekAverage =
            lastweekTransaction > 0
                ? lastWeekSales / lastweekTransaction
                : 0;


        // ==========================================
        // 8. SALES PERCENTAGE
        // ==========================================

        const salesPercentage =
            lastWeekSales > 0
                ? ((thisWeekSales - lastWeekSales) / lastWeekSales) * 100
                : 0;


        // ==========================================
        // 9. AVERAGE PERCENTAGE
        // ==========================================

        const averagePercentage =
            lastWeekAverage > 0
                ? ((thisWeekAverage - lastWeekAverage) / lastWeekAverage) * 100
                : 0;


        // ==========================================
        // 10. TODAY'S SALES
        // ==========================================

        const todaySales = await Sales.find({
            createdAt: {
                $gte: todayStart,
                $lte: todayEnd
            }
        });

        const todayTransaction = todaySales.length;


        // ==========================================
        // 11. TODAY'S ITEMS SOLD
        // ==========================================

        let todayItems = 0;

        todaySales.forEach((item) => {
            todayItems += item.quantity;
        });


        // ==========================================
        // 12. TOTAL TRANSACTIONS
        // ==========================================

        const Transactions = AllItems.length;


        // ==========================================
        // 13. TOTAL SALES & ITEMS SOLD
        // ==========================================

        let itemsSold = 0;
        let totalSales = 0;

        AllItems.forEach((item) => {

            totalSales += item.amount;

            itemsSold += item.quantity;

        });


        // ==========================================
        // 14. OVERALL AVERAGE
        // ==========================================

        const average =
            Transactions > 0
                ? totalSales / Transactions
                : 0;


        // ==========================================
        // 15. RESPONSE
        // ==========================================

        return res.status(200).json({
            success: true,

            // Overall
            totalTransactions: Transactions,
            totalSales: totalSales,
            averageSales: average,
            soldItems: itemsSold,

            // Today
            todayTransaction: todayTransaction,
            todayItems: todayItems,

            // This Week
            thisWeekSales: thisWeekSales,
            thisWeekTransactions: thisweekTransaction,
            thisWeekAverage: thisWeekAverage,

            // Last Week
            lastWeekSales: lastWeekSales,
            lastWeekTransactions: lastweekTransaction,
            lastWeekAverage: lastWeekAverage,

            // Percentages
            salesPercentage: salesPercentage,
            averagePercentage: averagePercentage
        });

    }

    catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = salesOperations;