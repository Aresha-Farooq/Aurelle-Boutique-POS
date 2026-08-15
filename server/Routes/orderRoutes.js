const express = require("express");

const router = express.Router();

const { totalOrders } = require("../Controller/totalOrders");
const { createOrder } = require("../Controller/orderController");

const orderOperations = require("../Controller/orderOperations");

router.post("/order", createOrder);

router.get("/totalOrders", totalOrders);

router.get("/Operations", orderOperations);

module.exports = router;