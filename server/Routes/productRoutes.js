const express = require("express");
const router = express.Router();

const { addProduct } = require("../Controller/productController");
const RoleMiddleware = require("../Middleware/roleMiddleware");
const authMiddleware = require("../Middleware/authMiddleware");

console.log("authMiddleware:", typeof authMiddleware);
console.log("RoleMiddleware:", typeof RoleMiddleware);
console.log("addProduct:", typeof addProduct);

router.post(
    "/addProduct",
    authMiddleware,
    RoleMiddleware("owner"),
    addProduct
);

module.exports = router;