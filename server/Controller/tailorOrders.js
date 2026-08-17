const Tailor = require("../Model/Tailor");
const Order = require("../Model/Order");

const tailorOperations = async (req, res) => {
    try {

        // =========================
        // 1. GET ALL TAILORS
        // =========================

        const Tailors = await Tailor.find();

        if (Tailors.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No tailor found"
            });
        }

        const totalTailors = Tailors.length;


        // =========================
        // 2. AVAILABLE / BUSY TAILORS
        // =========================

        const result = await Tailor.aggregate([

            {
                $facet: {

                    availableTailors: [
                        {
                            $match: {
                                availability: "Available"
                            }
                        },
                        {
                            $count: "count"
                        }
                    ],

                    busyTailors: [
                        {
                            $match: {
                                availability: "Busy"
                            }
                        },
                        {
                            $count: "count"
                        }
                    ]

                }
            }

        ]);


        // =========================
        // 3. TOP TAILORS
        // =========================

        const topTailors = await Order.aggregate([

            {
                $match: {
                    status: "Completed"
                }
            },

            {
                $group: {
                    _id: "$assignedTailor",

                    completedOrders: {
                        $sum: 1
                    }
                }
            },

            {
                $sort: {
                    completedOrders: -1
                }
            },

            {
                $limit: 5
            }

        ]);


        // =========================
        // 4. SEARCH TAILORS
        // =========================

        const { search } = req.query;

        let TailorResult = Tailors;

        if (search) {

            TailorResult = await Tailor.find({
                $or: [

                    {
                        tailorName: {
                            $regex: search,
                            $options: "i"
                        }
                    },

                    {
                        phoneNumber: {
                            $regex: search,
                            $options: "i"
                        }
                    },

                    {
                        email: {
                            $regex: search,
                            $options: "i"
                        }
                    },

                    {
                        CNIC: {
                            $regex: search,
                            $options: "i"
                        }
                    }

                ]
            });
        }


        // =========================
        // 5. RESPONSE
        // =========================

        return res.status(200).json({
            success: true,

            totalTailors,

            availableTailors:
                result[0].availableTailors[0]?.count || 0,

            busyTailors:
                result[0].busyTailors[0]?.count || 0,

            topTailors,

            TailorResult
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = tailorOperations;