const express = require("express");
const router = express.Router();

const RoleMiddleware = require("../Middleware/roleMiddleware");
const authMiddleware = require("../Middleware/authMiddleware");

const Tailors = require("../Controller/Tailors");
const tailorOperations = require("../Controller/tailorOrders");

console.log("authMiddleware:", typeof authMiddleware);
console.log("RoleMiddleware:", typeof RoleMiddleware);
console.log("Tailors:", typeof Tailors);
console.log("tailorOperations:", typeof tailorOperations);

router.use(
    authMiddleware,
    RoleMiddleware("owner")
);

router.post(
    "/addTailor",
    Tailors
);

router.get(
    "/getTailors",
    tailorOperations
);

module.exports = router;