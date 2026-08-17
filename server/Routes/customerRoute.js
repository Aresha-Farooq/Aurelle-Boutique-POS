const Customer = require("../Model/Customer");
const customerOperations = require("../Controller/customerOperations");

const express = require("express");
const roleMiddleware = require("../Middleware/roleMiddleware");
const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

router.use(
    authMiddleware,
    roleMiddleware("owner")
);

router.get("/addCustomer", Customer);
router.get("/getCustomers", customerOperations);

module.exports = router;