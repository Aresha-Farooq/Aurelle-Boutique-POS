const express = require("express");
const authMiddleware = require("../Middleware/authMiddleware");
const roleMiddleware = require("../Middleware/roleMiddleware");
const router = express.Router();
const {createSale} = require("../Controller/saleController");
const {calenderOperations}=require("../Controller/calSalesOperations");
const {getSalesChart}=require("../Controller/salesChart");
router.use(
    authMiddleware,
    roleMiddleware("owner")
);

router.post("/sales", createSale);
router.get("/salesChart",getSalesChart);
router.get("/Calender",calenderOperations);
module.exports = router;