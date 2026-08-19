const Sales = require("../Model/Sales");

const salesOperations = async (req, res) => {
    try {

        // =====================================================
        // 1. GET ALL SALES
        // =====================================================

        const AllItems = await Sales.find();

        if (AllItems.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Sales found"
            });
        }


        // =====================================================
        // 2. TODAY'S DATE
        // =====================================================

        const today = new Date();


        // =====================================================
        // 3. TODAY START & END
        // =====================================================

        const todayStart = new Date(today);
        todayStart.setHours(0, 0, 0, 0);

        const todayEnd = new Date(today);
        todayEnd.setHours(23, 59, 59, 999);


        // =====================================================
        // 4. YESTERDAY START & END
        // =====================================================

        const yesterdayStart = new Date(today);
        yesterdayStart.setDate(today.getDate() - 1);
        yesterdayStart.setHours(0, 0, 0, 0);

        const yesterdayEnd = new Date(today);
        yesterdayEnd.setDate(today.getDate() - 1);
        yesterdayEnd.setHours(23, 59, 59, 999);


        // =====================================================
        // 5. THIS WEEK START & END
        // Monday → Sunday
        // =====================================================

        const day = today.getDay();

        const diff = day === 0 ? 6 : day - 1;

        const thisWeekStart = new Date(today);
        thisWeekStart.setDate(today.getDate() - diff);
        thisWeekStart.setHours(0, 0, 0, 0);

        const thisWeekEnd = new Date(thisWeekStart);
        thisWeekEnd.setDate(thisWeekStart.getDate() + 6);
        thisWeekEnd.setHours(23, 59, 59, 999);


        // =====================================================
        // 6. LAST WEEK START & END
        // =====================================================

        const lastWeekStart = new Date(thisWeekStart);
        lastWeekStart.setDate(thisWeekStart.getDate() - 7);
        lastWeekStart.setHours(0, 0, 0, 0);

        const lastWeekEnd = new Date(thisWeekStart);
        lastWeekEnd.setDate(thisWeekStart.getDate() - 1);
        lastWeekEnd.setHours(23, 59, 59, 999);


        // =====================================================
        // 7. THIS MONTH START & END
        // =====================================================

        const thisMonthStart = new Date(today);

        thisMonthStart.setDate(1);
        thisMonthStart.setHours(0, 0, 0, 0);

        const thisMonthEnd = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0,
            23,
            59,
            59,
            999
        );


        // =====================================================
        // 8. LAST MONTH START & END
        // =====================================================

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


        // =====================================================
        // 9. THIS YEAR START & END
        // =====================================================

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


        // =====================================================
        // 10. LAST YEAR START & END
        // =====================================================

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


        // =====================================================
        // 11. TODAY SALES
        // =====================================================

        const todaySales = await Sales.find({
            createdAt: {
                $gte: todayStart,
                $lte: todayEnd
            }
        });

        let todayTotalSale = 0;
        let todayItems = 0;

        todaySales.forEach((item) => {

            todayTotalSale += item.amount;
            todayItems += item.quantity;

        });

        const todayTransaction = todaySales.length;

        const todayAvg =
            todayTransaction > 0
                ? todayTotalSale / todayTransaction
                : 0;


        // =====================================================
        // 12. YESTERDAY SALES
        // =====================================================

        const yesterdaySales = await Sales.find({
            createdAt: {
                $gte: yesterdayStart,
                $lte: yesterdayEnd
            }
        });

        let yesterdayTotalSales = 0;
        let yesterdayItemsSold = 0;

        yesterdaySales.forEach((item) => {

            yesterdayTotalSales += item.amount;
            yesterdayItemsSold += item.quantity;

        });

        const yesterdayTransaction = yesterdaySales.length;

        const yesterdayAvg =
            yesterdayTransaction > 0
                ? yesterdayTotalSales / yesterdayTransaction
                : 0;


        // =====================================================
        // 13. TODAY VS YESTERDAY COMPARISON
        // =====================================================

        // Sales percentage
        const dailySalesDiff =
            yesterdayTotalSales !== 0
                ? ((todayTotalSale - yesterdayTotalSales) / yesterdayTotalSales) * 100
                : 0;


        // Average percentage
        const dailySalesAvg =
            yesterdayAvg !== 0
                ? ((todayAvg - yesterdayAvg) / yesterdayAvg) * 100
                : 0;


        // Transaction difference
        const dailyTransactionDiff =
            yesterdayTransaction !== 0
                ? (todayTransaction - yesterdayTransaction) / yesterdayTransaction
                : 0;


        // Items difference
        const dailyItemsDiff =
            yesterdayItemsSold !== 0
                ? (todayItems - yesterdayItemsSold) / yesterdayItemsSold
                : 0;


        // =====================================================
        // 14. THIS WEEK & LAST WEEK CALCULATIONS
        // =====================================================

        let thisWeekSales = 0;
        let thisWeekTransaction = 0;
        let thisWeekSold = 0;

        let lastWeekSales = 0;
        let lastWeekTransaction = 0;
        let lastWeekSold = 0;


        AllItems.forEach((item) => {

            const saleDate = new Date(item.createdAt);


            // -----------------------------
            // This Week
            // -----------------------------

            if (
                saleDate >= thisWeekStart &&
                saleDate <= thisWeekEnd
            ) {

                thisWeekSales += item.amount;
                thisWeekTransaction++;
                thisWeekSold += item.quantity;

            }


            // -----------------------------
            // Last Week
            // -----------------------------

            if (
                saleDate >= lastWeekStart &&
                saleDate <= lastWeekEnd
            ) {

                lastWeekSales += item.amount;
                lastWeekTransaction++;
                lastWeekSold += item.quantity;

            }

        });


        // =====================================================
        // 15. WEEKLY AVERAGES
        // =====================================================

        const thisWeekAverage =
            thisWeekTransaction > 0
                ? thisWeekSales / thisWeekTransaction
                : 0;

        const lastWeekAverage =
            lastWeekTransaction > 0
                ? lastWeekSales / lastWeekTransaction
                : 0;


        // =====================================================
        // 16. THIS WEEK VS LAST WEEK
        // =====================================================

        const weeklySalesDiff =
            lastWeekSales !== 0
                ? ((thisWeekSales - lastWeekSales) / lastWeekSales) * 100
                : 0;


        const weeklyAverageDiff =
            lastWeekAverage !== 0
                ? ((thisWeekAverage - lastWeekAverage) / lastWeekAverage) * 100
                : 0;


        const weeklyTransactionDiff =
            lastWeekTransaction !== 0
                ? (thisWeekTransaction - lastWeekTransaction) / lastWeekTransaction
                : 0;


        const weeklyItemsDiff =
            lastWeekSold !== 0
                ? (thisWeekSold - lastWeekSold) / lastWeekSold
                : 0;


        // =====================================================
        // 17. THIS MONTH SALES
        // =====================================================

        const thisMonthSales = await Sales.find({
            createdAt: {
                $gte: thisMonthStart,
                $lte: thisMonthEnd
            }
        });

        let monthlySales = 0;
        let monthlySold = 0;

        thisMonthSales.forEach((item) => {

            monthlySales += item.amount;
            monthlySold += item.quantity;

        });

        const monthlyTransaction = thisMonthSales.length;

        const monthlyAvg =
            monthlyTransaction > 0
                ? monthlySales / monthlyTransaction
                : 0;


        // =====================================================
        // 18. LAST MONTH SALES
        // =====================================================

        const lastMonthSales = await Sales.find({
            createdAt: {
                $gte: lastMonthStart,
                $lte: lastMonthEnd
            }
        });

        let lastMonthTotal = 0;
        let lastMonthSold = 0;

        lastMonthSales.forEach((item) => {

            lastMonthTotal += item.amount;
            lastMonthSold += item.quantity;

        });

        const lastMonthTransaction = lastMonthSales.length;

        const lastMonthAvgSales =
            lastMonthTransaction > 0
                ? lastMonthTotal / lastMonthTransaction
                : 0;


        // =====================================================
        // 19. THIS MONTH VS LAST MONTH
        // =====================================================

        const monthlyAvgDiff =
            lastMonthAvgSales !== 0
                ? ((monthlyAvg - lastMonthAvgSales) / lastMonthAvgSales) * 100
                : 0;


        const monthlyTransactionDiff =
            lastMonthTransaction !== 0
                ? (monthlyTransaction - lastMonthTransaction) / lastMonthTransaction
                : 0;


        const monthlySalesDiff =
            lastMonthTotal !== 0
                ? ((monthlySales - lastMonthTotal) / lastMonthTotal) * 100
                : 0;


        const monthlySoldDiff =
            lastMonthSold !== 0
                ? (monthlySold - lastMonthSold) / lastMonthSold
                : 0;


        // =====================================================
        // 20. THIS YEAR SALES
        // =====================================================

        const thisYearSales = await Sales.find({
            createdAt: {
                $gte: thisYearStart,
                $lte: thisYearEnd
            }
        });

        let thisYearTotal = 0;
        let thisYearSold = 0;

        thisYearSales.forEach((item) => {

            thisYearTotal += item.amount;
            thisYearSold += item.quantity;

        });

        const thisYearTransaction = thisYearSales.length;

        const thisYearAvg =
            thisYearTransaction > 0
                ? thisYearTotal / thisYearTransaction
                : 0;


        // =====================================================
        // 21. LAST YEAR SALES
        // =====================================================

        const lastYearSales = await Sales.find({
            createdAt: {
                $gte: lastYearStart,
                $lte: lastYearEnd
            }
        });

        let lastYearTotal = 0;
        let lastYearSold = 0;

        lastYearSales.forEach((item) => {

            lastYearTotal += item.amount;
            lastYearSold += item.quantity;

        });

        const lastYearTransaction = lastYearSales.length;

        const lastYearAvgSales =
            lastYearTransaction > 0
                ? lastYearTotal / lastYearTransaction
                : 0;


        // =====================================================
        // 22. THIS YEAR VS LAST YEAR
        // =====================================================

        const yearlyAvgSalesDiff =
            lastYearAvgSales !== 0
                ? ((thisYearAvg - lastYearAvgSales) / lastYearAvgSales) * 100
                : 0;


        const yearlySalesDiff =
            lastYearTotal !== 0
                ? ((thisYearTotal - lastYearTotal) / lastYearTotal) * 100
                : 0;


        const yearlyTransactionDiff =
            lastYearTransaction !== 0
                ? (thisYearTransaction - lastYearTransaction) / lastYearTransaction
                : 0;


        const yearlySoldDiff =
            lastYearSold !== 0
                ? (thisYearSold - lastYearSold) / lastYearSold
                : 0;


        // =====================================================
        // 23. OVERALL SALES
        // =====================================================

        const Transactions = AllItems.length;

        let totalSales = 0;
        let itemsSold = 0;

        AllItems.forEach((item) => {

            totalSales += item.amount;
            itemsSold += item.quantity;

        });

        const average =
            Transactions > 0
                ? totalSales / Transactions
                : 0;


        // =====================================================
        // 24. SEARCH
        // =====================================================

        const { search } = req.query;

        let sales = AllItems;

        if (search && search.trim() !== "") {

            const searchValue = search.trim();

            const searchCondition = [
                {
                    customer: {
                        $regex: searchValue,
                        $options: "i"
                    }
                },
                {
                    product: {
                        $regex: searchValue,
                        $options: "i"
                    }
                }
            ];


            // If search is a number,
            // search amount also

            if (!isNaN(searchValue)) {

                searchCondition.push({
                    amount: Number(searchValue)
                });

            }


            sales = await Sales.find({
                $or: searchCondition
            });

        }


        // =====================================================
        // 25. OVERALL PAYMENT METHODS
        // =====================================================

        let Cash = 0;
        let Card = 0;
        let EasyPaisa = 0;
        let JazzCash = 0;

        AllItems.forEach((item) => {

            if (item.paymentMethod === "Cash") {
                Cash++;
            }

            else if (item.paymentMethod === "Card") {
                Card++;
            }

            else if (item.paymentMethod === "EasyPaisa") {
                EasyPaisa++;
            }

            else if (item.paymentMethod === "JazzCash") {
                JazzCash++;
            }

        });


        const totalPayments = AllItems.length;

        const CashPercentage =
            totalPayments > 0
                ? (Cash / totalPayments) * 100
                : 0;

        const CardPercentage =
            totalPayments > 0
                ? (Card / totalPayments) * 100
                : 0;

        const EasyPaisaPercentage =
            totalPayments > 0
                ? (EasyPaisa / totalPayments) * 100
                : 0;

        const JazzCashPercentage =
            totalPayments > 0
                ? (JazzCash / totalPayments) * 100
                : 0;


        // =====================================================
        // 26. TODAY PAYMENT METHODS
        // =====================================================

        let todayCash = 0;
        let todayCard = 0;
        let todayEasyPaisa = 0;
        let todayJazzCash = 0;

        todaySales.forEach((item) => {

            if (item.paymentMethod === "Cash") {
                todayCash++;
            }

            else if (item.paymentMethod === "Card") {
                todayCard++;
            }

            else if (item.paymentMethod === "EasyPaisa") {
                todayEasyPaisa++;
            }

            else if (item.paymentMethod === "JazzCash") {
                todayJazzCash++;
            }

        });


        const todayCashPercentage =
            todayTransaction > 0
                ? (todayCash / todayTransaction) * 100
                : 0;

        const todayCardPercentage =
            todayTransaction > 0
                ? (todayCard / todayTransaction) * 100
                : 0;

        const todayEasyPaisaPercentage =
            todayTransaction > 0
                ? (todayEasyPaisa / todayTransaction) * 100
                : 0;

        const todayJazzCashPercentage =
            todayTransaction > 0
                ? (todayJazzCash / todayTransaction) * 100
                : 0;


        // =====================================================
        // 27. THIS WEEK PAYMENT METHODS
        // =====================================================

        const weeklySales = await Sales.find({
            createdAt: {
                $gte: thisWeekStart,
                $lte: thisWeekEnd
            }
        });

        let weekCash = 0;
        let weekCard = 0;
        let weekEasyPaisa = 0;
        let weekJazzCash = 0;

        weeklySales.forEach((item) => {

            if (item.paymentMethod === "Cash") {
                weekCash++;
            }

            else if (item.paymentMethod === "Card") {
                weekCard++;
            }

            else if (item.paymentMethod === "EasyPaisa") {
                weekEasyPaisa++;
            }

            else if (item.paymentMethod === "JazzCash") {
                weekJazzCash++;
            }

        });


        const weekCashPercentage =
            thisWeekTransaction > 0
                ? (weekCash / thisWeekTransaction) * 100
                : 0;

        const weekCardPercentage =
            thisWeekTransaction > 0
                ? (weekCard / thisWeekTransaction) * 100
                : 0;

        const weekEasyPaisaPercentage =
            thisWeekTransaction > 0
                ? (weekEasyPaisa / thisWeekTransaction) * 100
                : 0;

        const weekJazzCashPercentage =
            thisWeekTransaction > 0
                ? (weekJazzCash / thisWeekTransaction) * 100
                : 0;


        // =====================================================
        // 28. THIS MONTH PAYMENT METHODS
        // =====================================================

        let monthCash = 0;
        let monthCard = 0;
        let monthEasyPaisa = 0;
        let monthJazzCash = 0;

        thisMonthSales.forEach((item) => {

            if (item.paymentMethod === "Cash") {
                monthCash++;
            }

            else if (item.paymentMethod === "Card") {
                monthCard++;
            }

            else if (item.paymentMethod === "EasyPaisa") {
                monthEasyPaisa++;
            }

            else if (item.paymentMethod === "JazzCash") {
                monthJazzCash++;
            }

        });


        const monthCashPercentage =
            monthlyTransaction > 0
                ? (monthCash / monthlyTransaction) * 100
                : 0;

        const monthCardPercentage =
            monthlyTransaction > 0
                ? (monthCard / monthlyTransaction) * 100
                : 0;

        const monthEasyPaisaPercentage =
            monthlyTransaction > 0
                ? (monthEasyPaisa / monthlyTransaction) * 100
                : 0;

        const monthJazzCashPercentage =
            monthlyTransaction > 0
                ? (monthJazzCash / monthlyTransaction) * 100
                : 0;


        // =====================================================
        // 29. THIS YEAR PAYMENT METHODS
        // =====================================================

        let yearCash = 0;
        let yearCard = 0;
        let yearEasyPaisa = 0;
        let yearJazzCash = 0;

        thisYearSales.forEach((item) => {

            if (item.paymentMethod === "Cash") {
                yearCash++;
            }

            else if (item.paymentMethod === "Card") {
                yearCard++;
            }

            else if (item.paymentMethod === "EasyPaisa") {
                yearEasyPaisa++;
            }

            else if (item.paymentMethod === "JazzCash") {
                yearJazzCash++;
            }

        });


        const yearCashPercentage =
            thisYearTransaction > 0
                ? (yearCash / thisYearTransaction) * 100
                : 0;

        const yearCardPercentage =
            thisYearTransaction > 0
                ? (yearCard / thisYearTransaction) * 100
                : 0;

        const yearEasyPaisaPercentage =
            thisYearTransaction > 0
                ? (yearEasyPaisa / thisYearTransaction) * 100
                : 0;

        const yearJazzCashPercentage =
            thisYearTransaction > 0
                ? (yearJazzCash / thisYearTransaction) * 100
                : 0;

    


        // =====================================================
        // 30. FINAL RESPONSE
        // =====================================================

        return res.status(200).json({

            success: true,


            // =================================================
            // OVERALL
            // =================================================

            overall: {
                transactions: Transactions,
                sales: totalSales,
                average: average,
                itemsSold: itemsSold,

                paymentMethods: {
                    cash: CashPercentage,
                    card: CardPercentage,
                    easyPaisa: EasyPaisaPercentage,
                    jazzCash: JazzCashPercentage
                }
            },


            // =================================================
            // TODAY
            // =================================================

            today: {

                transactions: todayTransaction,
                sales: todayTotalSale,
                average: todayAvg,
                itemsSold: todayItems,

                comparison: {
                    salesDiff: dailySalesDiff,
                    averageDiff: dailySalesAvg,
                    transactionDiff: dailyTransactionDiff,
                    itemsDiff: dailyItemsDiff
                },

                paymentMethods: {
                    cash: todayCashPercentage,
                    card: todayCardPercentage,
                    easyPaisa: todayEasyPaisaPercentage,
                    jazzCash: todayJazzCashPercentage
                }

            },


            // =================================================
            // YESTERDAY
            // =================================================

            yesterday: {

                transactions: yesterdayTransaction,
                sales: yesterdayTotalSales,
                average: yesterdayAvg,
                itemsSold: yesterdayItemsSold

            },


            // =================================================
            // THIS WEEK
            // =================================================

            thisWeek: {

                transactions: thisWeekTransaction,
                sales: thisWeekSales,
                average: thisWeekAverage,
                itemsSold: thisWeekSold,

                comparison: {
                    salesDiff: weeklySalesDiff,
                    averageDiff: weeklyAverageDiff,
                    transactionDiff: weeklyTransactionDiff,
                    itemsDiff: weeklyItemsDiff
                },

                paymentMethods: {
                    cash: weekCashPercentage,
                    card: weekCardPercentage,
                    easyPaisa: weekEasyPaisaPercentage,
                    jazzCash: weekJazzCashPercentage
                }

            },


            // =================================================
            // LAST WEEK
            // =================================================

            lastWeek: {

                transactions: lastWeekTransaction,
                sales: lastWeekSales,
                average: lastWeekAverage,
                itemsSold: lastWeekSold

            },


            // =================================================
            // THIS MONTH
            // =================================================

            thisMonth: {

                transactions: monthlyTransaction,
                sales: monthlySales,
                average: monthlyAvg,
                itemsSold: monthlySold,

                comparison: {
                    salesDiff: monthlySalesDiff,
                    averageDiff: monthlyAvgDiff,
                    transactionDiff: monthlyTransactionDiff,
                    itemsDiff: monthlySoldDiff
                },

                paymentMethods: {
                    cash: monthCashPercentage,
                    card: monthCardPercentage,
                    easyPaisa: monthEasyPaisaPercentage,
                    jazzCash: monthJazzCashPercentage
                }

            },


            // =================================================
            // LAST MONTH
            // =================================================

            lastMonth: {

                transactions: lastMonthTransaction,
                sales: lastMonthTotal,
                average: lastMonthAvgSales,
                itemsSold: lastMonthSold

            },


            // =================================================
            // THIS YEAR
            // =================================================

            thisYear: {

                transactions: thisYearTransaction,
                sales: thisYearTotal,
                average: thisYearAvg,
                itemsSold: thisYearSold,

                comparison: {
                    salesDiff: yearlySalesDiff,
                    averageDiff: yearlyAvgSalesDiff,
                    transactionDiff: yearlyTransactionDiff,
                    itemsDiff: yearlySoldDiff
                },

                paymentMethods: {
                    cash: yearCashPercentage,
                    card: yearCardPercentage,
                    easyPaisa: yearEasyPaisaPercentage,
                    jazzCash: yearJazzCashPercentage
                }

            },


            // =================================================
            // LAST YEAR
            // =================================================

            lastYear: {

                transactions: lastYearTransaction,
                sales: lastYearTotal,
                average: lastYearAvgSales,
                itemsSold: lastYearSold

            },


            // =================================================
            // SEARCH RESULTS
            // =================================================

            searchResults: sales

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