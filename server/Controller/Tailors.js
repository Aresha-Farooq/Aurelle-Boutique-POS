const Tailors = require("../Model/Tailor");

const createTailors = async (req, res) => {
    try {
        const Tailor = await Tailors.create(req.body);

        res.status(201).json({
            success: true,
            message: "Tailor added successfully",
            data: Tailor
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = createTailors;