const express = require("express");
const router = express.Router();
const roleMiddleware = require("../Middleware/roleMiddleware");
const authMiddleware = require("../Middleware/authMiddleware");
const {salesManagement,salesOperations}=require("../Controller/managementController")
router.use(
    authMiddleware,
    roleMiddleware("owner")
);
router.post("/addStaff",salesManagement );
router.post("/staffoperations",salesOperations );
module.exports = router;