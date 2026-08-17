const Product = require("../Model/Product");
const User = require("../Model/User");
const jwt = require("jsonwebtoken");

const ProductOperations = async (req, res) => {
    try {
        // =========================
        // 1. TOKEN CHECK
        // =========================

     

        const user_id = req.user.id;
        // =========================
        // 4. GET ALL PRODUCTS
        // =========================

        const products = await Product.find();

        if (products.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No products found"
            });
        }

        // =========================
        // 5. TOTAL PRODUCTS
        // =========================

        const total = products.length;

        // =========================
        // 6. STOCK STATUS FUNCTION
        // =========================

        const getStockStatus = (product) => {

            if (product.stockQuantity === 0) {
                return "Out of Stock";
            }

            if (product.stockQuantity <= product.minimumStock) {
                return "Low Stock";
            }

            return "In Stock";
        };

        // =========================
        // 7. ADD STOCK STATUS
        // =========================

        const productsWithStatus = products.map((product) => {
            return {
                ...product.toObject(),
                stockStatus: getStockStatus(product)
            };
        });

        // =========================
        // 8. LOW STOCK COUNT
        // =========================

        const lowStockProducts = productsWithStatus.filter(
            (product) => product.stockStatus === "Low Stock"
        );

        const lowStockCount = lowStockProducts.length;

        // =========================
        // 9. OUT OF STOCK COUNT
        // =========================

        const outOfStockProducts = productsWithStatus.filter(
            (product) => product.stockStatus === "Out of Stock"
        );

        const outOfStockCount = outOfStockProducts.length;

        // =========================
        // 10. SEARCH
        // =========================

        const { search } = req.query;

        let searchResults = productsWithStatus;

        if (search && search.trim() !== "") {

            const searchProducts = await Product.find({
                $or: [
                    {
                        productName: {
                            $regex: search,
                            $options: "i"
                        }
                    },
                    {
                        sku: {
                            $regex: search,
                            $options: "i"
                        }
                    },
                    {
                        category: {
                            $regex: search,
                            $options: "i"
                        }
                    },
                    {
                        color: {
                            $regex: search,
                            $options: "i"
                        }
                    }
                ]
            });

            searchResults = searchProducts.map((product) => {
                return {
                    ...product.toObject(),
                    stockStatus: getStockStatus(product)
                };
            });
        }

        // =========================
        // 11. RESPONSE
        // =========================

        return res.status(200).json({
            success: true,
            message: "Products fetched successfully",

            totalProducts: total,

            lowStockProducts: lowStockCount,

            outOfStockProducts: outOfStockCount,

            products: searchResults
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = ProductOperations;