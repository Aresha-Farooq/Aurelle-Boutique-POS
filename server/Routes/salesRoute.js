const express = require("express");

const router = express.Router();
const {createSale} = require("../Controller/saleController");
const {getSalesChart}=require("../Controller/salesChart");
router.post("/sales",createSale);
router.get("/salesChart",getSalesChart);
module.exports = router;