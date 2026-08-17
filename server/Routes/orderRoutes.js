const express = require("express");

const router = express.Router();

const { totalOrders } = require("../Controller/totalOrders");
const { createOrder } = require("../Controller/orderController");
const roleMiddleware = require("../Middleware/roleMiddleware");
const authMiddleware = require("../Middleware/authMiddleware");

const orderOperations = require("../Controller/orderOperations");

router.use(
    authMiddleware,
    roleMiddleware("owner")
);
router.post("/order", createOrder);

router.get("/totalOrders", totalOrders);

router.get("/Operations", orderOperations);

module.exports = router;