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
        let thisWeekSold=0;

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
                thisWeekSold+=item.quantity;

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
        let todayTotalSale=0;
        let totalTodaySold=0;
        todaySales.forEach((item)=>{
        todayTotalSale+=item.amount;
        todayTotalSold+=item.quantity;
        })
        const todayAvg=todayTransaction!==0?todayTotalSale/todayTransaction:0;
         
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
       //Monthly

        const Month = today.getMonth();
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

const thisMonthSales=await Sales.find({
    createdAt: {
                $gte: thisMonthStart,
                $lte: thisMonthEnd
            }
})
let monthlySales=0;
let monthlySold=0;
const monthlyTransaction=thisMonthSales.length;
 thisMonthSales.forEach((item)=>{
  monthlySales+=item.amount;
  monthlySold+=item.quantity;
})
const monthlyAvg=monthlyTransaction!==0?monthlySales/monthlyTransaction:0;
//Year

const Year=today.getFullYear();
const thisYearStart= new Date(today) ;
thisYearStart.setDate(1);
thisYearStart.setMonth(0);
thisYearStart.setHours(0, 0, 0, 0);

const thisYearEnd = new Date(
    today.getFullYear(),
    11,
    31,
    23,
    59,
    59,
    999
);
const thisYearSales=await Sales.find({
    createdAt:{
         $gte: thisYearStart,
         $lte: thisYearEnd
    }
})
let thisYearTotal=0;
let thisYearSold=0;

   thisYearSales.forEach((item)=>{
thisYearTotal+=item.amount;
thisYearSold+=item.quantity;
})
const thisYearTransaction=thisYearSales.length;
const thisYearAvg=thisYearTransaction!==0?thisYearTotal/thisYearTransaction:0;

//Search
const { search } = req.query;

let searchCondition = [
    {
        customer: {
            $regex: search,
            $options: "i"
        }
    },
    {
        product: {
            $regex: search,
            $options: "i"
        }
    }
];

if (!isNaN(search)) {
    searchCondition.push({
        amount: Number(search)
    });
}

const sales = await Sales.find({
    $or: searchCondition
});
//Payment Method
let Cash=0;
let EasyPaisa=0;
let JazzCash=0;
let Card=0;
AllItems.forEach((item)=>{
if(item.paymentMethod==="Cash"){
    ++Cash;
}
else if(item.paymentMethod==="Card"){
    ++Card;
}
else if(item.paymentMethod==="EasyPaisa")
{
    ++EasyPaisa;
}
else if(item.paymentMethod==="JazzCash"){
    ++JazzCash;
}
})
const totalPayments = AllItems.length;
const CashPercentage =
    totalPayments > 0 ? (Cash / totalPayments) * 100 : 0;

const CardPercentage =
    totalPayments > 0 ? (Card / totalPayments) * 100 : 0;

const EasyPaisaPercentage =
    totalPayments > 0 ? (EasyPaisa / totalPayments) * 100 : 0;

const JazzCashPercentage =
    totalPayments > 0 ? (JazzCash / totalPayments) * 100 : 0;

    //Today Payment Methods

    let todayCash=0;
let todayEasyPaisa=0;
let todayJazzCash=0;
let todayCard=0;
       todaySales.forEach((item)=>{
if(item.paymentMethod==="Cash"){
    ++todayCash;
}
else if(item.paymentMethod==="Card"){
    ++todayCard;
}
else if(item.paymentMethod==="EasyPaisa")
{
    ++todayEasyPaisa;
}
else if(item.paymentMethod==="JazzCash"){
    ++todayJazzCash;
}
       })
      
        const todayCashPercentage =
      todayTotalSale > 0 ? (todayCash /   todayTotalSale) * 100 : 0;

const todayCardPercentage =
      todayTotalSale > 0 ? (todayCard /   todayTotalSale) * 100 : 0;

const todayEasyPaisaPercentage =
      todayTotalSale > 0 ? (todayEasyPaisa /   todayTotalSale) * 100 : 0;

const todayJazzCashPercentage =
      todayTotalSale > 0 ? (todayJazzCash /   todayTotalSale) * 100 : 0;


      //Weekly payment methods
      
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