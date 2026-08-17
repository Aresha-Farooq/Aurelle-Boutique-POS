const express = require("express");
const router = express.Router();

const { addProduct } = require("../Controller/productController");
const roleMiddleware = require("../Middleware/roleMiddleware");
const authMiddleware = require("../Middleware/authMiddleware");
const productOperations=require("../Controller/productOperations");
console.log("authMiddleware:", typeof authMiddleware);
console.log("RoleMiddleware:", typeof RoleMiddleware);
console.log("addProduct:", typeof addProduct);
router.use(
    authMiddleware,
    roleMiddleware("owner")
);
router.post(
    "/addProduct",
    addProduct
);

router.get(
    "/products",
    productOperations
);
    
module.exports = router;