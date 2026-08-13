const express = require("express");
const authMiddleware = require("../Middleware/authMiddleware");
const roleMiddleware = require("../Middleware/roleMiddleware");
const router = express.Router();
const {createSale} = require("../Controller/saleController");
const {getSalesChart}=require("../Controller/salesChart");
router.post("/sales", authMiddleware,
  roleMiddleware("owner"),createSale);
router.get("/salesChart",authMiddleware,
  roleMiddleware("owner"),getSalesChart);
module.exports = router;