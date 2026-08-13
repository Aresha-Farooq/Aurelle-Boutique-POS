const Product = require("../Model/Product");

const addProduct = async (req, res) => {

    const {
        productName,
        sku,
        size,
        color,
        purchasePrice,
        minimumStock,
        salePrice,
        category,
        stockQuantity
    } = req.body;

    try {

        const product = await Product.create({
            productName,
            sku,
            purchasePrice,
            size,
            color,
            minimumStock,
            salePrice,
            category,
            stockQuantity
        });

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    addProduct
};