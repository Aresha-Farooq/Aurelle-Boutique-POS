const express = require("express");
const router = express.Router();

const { addProduct } = require("../Controller/productController");
const RoleMiddleware = require("../Middleware/roleMiddleware");
const authMiddleware = require("../Middleware/authMiddleware");
const productOperations=require("../Controller/productOperations");
console.log("authMiddleware:", typeof authMiddleware);
console.log("RoleMiddleware:", typeof RoleMiddleware);
console.log("addProduct:", typeof addProduct);

router.post(
    "/addProduct",
    authMiddleware,
    RoleMiddleware("owner"),
    addProduct
);

router.get(
    "/products",
    authMiddleware,
    RoleMiddleware("owner"),
    productOperations
);
    
module.exports = router;