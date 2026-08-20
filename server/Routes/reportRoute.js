const express = require("express");
const router = express.Router();
const reportOperation=require("../Controller/reportGeneration")
const roleMiddleware = require("../Middleware/roleMiddleware");
const authMiddleware = require("../Middleware/authMiddleware");
router.use(
    authMiddleware,
    roleMiddleware("owner")
);
router.get("/report", reportOperation);
module.exports = router;
