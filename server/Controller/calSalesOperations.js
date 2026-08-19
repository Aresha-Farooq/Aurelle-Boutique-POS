const Sales=require("../Model/Sales");
const  calenderOperations=async(req,res)=>{
    try{

        const { date } = req.query;
       
       if (!date) {
           return res.status(400).json({
               success: false,
               message: "Date is required"
           });
       }
       
       const selectedDate = new Date(date);
       
       if (isNaN(selectedDate.getTime())) {
           return res.status(400).json({
               success: false,
               message: "Invalid date"
           });
       }
       const selectedDateStart = new Date(date);
       selectedDateStart.setHours(0, 0, 0, 0);
       
       const selectedDateEnd = new Date(date);
       selectedDateEnd.setHours(23, 59, 59, 999);
       const selectedDateSales = await Sales.find({
           createdAt: {
               $gte: selectedDateStart,
               $lte: selectedDateEnd
           }
       });
       let selectedTotalSales = 0;
       let selectedItemsSold = 0;
       
       selectedDateSales.forEach((item) => {
       
           selectedTotalSales += item.amount;
       
           selectedItemsSold += item.quantity;
       
       });
       
       const selectedTransactions = selectedDateSales.length;
       
       const selectedAverage =
           selectedTransactions > 0
               ? selectedTotalSales / selectedTransactions
               : 0;
       
               const previousDateStart = new Date(selectedDateStart);
       
       previousDateStart.setDate(
           previousDateStart.getDate() - 1
       );
       
       
       const previousDateEnd = new Date(selectedDateEnd);
       
       previousDateEnd.setDate(
           previousDateEnd.getDate() - 1
       );
       const previousDateSales = await Sales.find({
           createdAt: {
               $gte: previousDateStart,
               $lte: previousDateEnd
           }
       });
       let previousTotalSales = 0;
       let previousItemsSold = 0;
       
       previousDateSales.forEach((item) => {
       
           previousTotalSales += item.amount;
       
           previousItemsSold += item.quantity;
       
       });
       
       const previousTransactions = previousDateSales.length;
       
       const previousAverage =
           previousTransactions > 0
               ? previousTotalSales / previousTransactions
               : 0;
       
               const salesDifference =
           previousTotalSales !== 0
               ? (
                   (selectedTotalSales - previousTotalSales)
                   / previousTotalSales
               ) * 100
               : 0;
               const averageDifference =
           previousAverage !== 0
               ? (
                   (selectedAverage - previousAverage)
                   / previousAverage
               ) * 100
               : 0;
               const transactionDifference =
           selectedTransactions - previousTransactions;
       const itemsDifference =
           selectedItemsSold - previousItemsSold;
       
           let cash = 0;
       let card = 0;
       let easyPaisa = 0;
       let jazzCash = 0;
       
       selectedDateSales.forEach((item) => {
       
           if (item.paymentMethod === "Cash") {
               cash++;
           }
       
           else if (item.paymentMethod === "Card") {
               card++;
           }
       
           else if (item.paymentMethod === "EasyPaisa") {
               easyPaisa++;
           }
       
           else if (item.paymentMethod === "JazzCash") {
               jazzCash++;
           }
       
       });
       const cashPercentage =
           selectedTransactions > 0
               ? (cash / selectedTransactions) * 100
               : 0;
       
       const cardPercentage =
           selectedTransactions > 0
               ? (card / selectedTransactions) * 100
               : 0;
       
       const easyPaisaPercentage =
           selectedTransactions > 0
               ? (easyPaisa / selectedTransactions) * 100
               : 0;
       
       const jazzCashPercentage =
           selectedTransactions > 0
               ? (jazzCash / selectedTransactions) * 100
               : 0;
               return res.status(200).json({
       
           success: true,
       
           selectedDate: date,
       
           cards: {
       
               totalSales: selectedTotalSales,
       
               transactions: selectedTransactions,
       
               averageSale: selectedAverage,
       
               itemsSold: selectedItemsSold
       
           },
       
           comparison: {
       
               salesDifference: salesDifference,
       
               averageDifference: averageDifference,
       
               transactionDifference: transactionDifference,
       
               itemsDifference: itemsDifference
       
           },
       
           paymentMethods: {
       
               cash: cashPercentage,
       
               card: cardPercentage,
       
               easyPaisa: easyPaisaPercentage,
       
               jazzCash: jazzCashPercentage
       
           },
       
           sales: selectedDateSales
       
       });
    }
    catch(error){
        
        return res.status(500).json({

            success: false,

            message: error.message

        });

    }
}
module.exports = 
    calenderOperations
;