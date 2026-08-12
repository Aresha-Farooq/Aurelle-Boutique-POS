const express = require("express");

const router = express.Router();

const { totalOrders } = require("../Controller/totalOrders");   
const { createOrder } = require("../Controller/orderController");

router.post("/order", createOrder);
router.get("/totalOrders", totalOrders);
module.exports = router;