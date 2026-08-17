const Customer = require("../Model/Customer");
const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const Order = require("../Model/Order");

const getAllCustomers = async (req, res) => {

    try {

        // =====================================================
        // 5. SEARCH
        // =====================================================

        const { search } = req.query;

        let customers;

        if (search) {

            customers = await Customer.find({
                $or: [
                    {
                        name: {
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
                        phoneNumber: {
                            $regex: search,
                            $options: "i"
                        }
                    }
                ]
            });

        } else {

            customers = await Customer.find();

        }


        // =====================================================
        // 6. TOTAL CUSTOMERS
        // =====================================================

        const totalCustomers =
            await Customer.countDocuments();


        // =====================================================
        // 7. FAVOURITE CUSTOMERS
        // =====================================================

        const favCustomers =
            await Customer.find({
                status: "Favourite"
            });


        const totalFavouriteCustomers =
            favCustomers.length;


        // =====================================================
        // 8. 5+ ORDERS WAALE CUSTOMERS
        // =====================================================

        const result = await Order.aggregate([

            {
                $group: {

                    _id: "$customer",

                    totalOrders: {
                        $sum: 1
                    }

                }
            },

            {
                $match: {

                    totalOrders: {
                        $gte: 5
                    }

                }
            },

            {
                $count: "customers"
            }

        ]);


        const fivePlusOrders =
            result[0]
                ? result[0].customers
                : 0;


        // =====================================================
        // 9. CURRENT WEEK
        // =====================================================

        const today = new Date();

        const day = today.getDay();

        const diff =
            day === 0
                ? 6
                : day - 1;


        // Monday
        const weekStart = new Date(today);

        weekStart.setDate(
            today.getDate() - diff
        );

        weekStart.setHours(
            0, 0, 0, 0
        );


        // Sunday
        const weekEnd = new Date(weekStart);

        weekEnd.setDate(
            weekStart.getDate() + 6
        );

        weekEnd.setHours(
            23, 59, 59, 999
        );


        // =====================================================
        // 10. NEW CUSTOMERS
        // =====================================================

        let newCustomers = 0;


        for (const customer of customers) {

            const customerOrders =
                await Order.find({
                    customer: customer._id
                });


            // Agar customer ka koi order nahi
            if (customerOrders.length === 0) {
                continue;
            }


            // Orders ko oldest → newest sort karo
            customerOrders.sort((a, b) =>
                new Date(a.orderDate) -
                new Date(b.orderDate)
            );


            // Sabse pehla order
            const firstOrder =
                customerOrders[0];


            const orderDate =
                new Date(firstOrder.orderDate);


            const currentDate =
                new Date();


            // First order current month mein hai?
            if (
                orderDate.getMonth() ===
                    currentDate.getMonth() &&

                orderDate.getFullYear() ===
                    currentDate.getFullYear()
            ) {

                newCustomers++;

            }

        }


        // =====================================================
        // 11. FAVOURITE CUSTOMERS KE ORDERS THIS WEEK
        // =====================================================

        let favouriteOrdersThisWeek = 0;


        for (const favCustomer of favCustomers) {

            const customerOrders =
                await Order.find({
                    customer: favCustomer._id
                });


            customerOrders.forEach((order) => {

                const orderDate =
                    new Date(order.orderDate);


                if (
                    orderDate >= weekStart &&
                    orderDate <= weekEnd
                ) {

                    favouriteOrdersThisWeek++;

                }

            });

        }


        // =====================================================
        // 12. MONTH START / NEXT MONTH
        // =====================================================

        const monthStart = new Date(
            today.getFullYear(),
            today.getMonth(),
            1
        );


        const nextMonthStart = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            1
        );


        // =====================================================
        // 13. REGULAR CUSTOMERS
        // =====================================================

        const regularResult =
            await Order.aggregate([

                // Customer ke orders ko sort karo
                {
                    $sort: {
                        customer: 1,
                        orderDate: 1
                    }
                },


                // Har customer ke orders ko group karo
                {
                    $group: {

                        _id: "$customer",

                        orders: {
                            $push: "$orderDate"
                        },

                        totalOrders: {
                            $sum: 1
                        }

                    }
                },


                // Sirf 5 ya zyada orders wale customers
                {
                    $match: {

                        totalOrders: {
                            $gte: 5
                        }

                    }
                },


                // 5th order nikalo
                {
                    $project: {

                        fifthOrderDate: {
                            $arrayElemAt: [
                                "$orders",
                                4
                            ]
                        }

                    }
                },


                // 5th order current month mein hona chahiye
                {
                    $match: {

                        fifthOrderDate: {
                            $gte: monthStart,
                            $lt: nextMonthStart
                        }

                    }

                },


                // Customers count karo
                {
                    $count: "becameRegular"
                }

            ]);


        const becameRegular =
            regularResult[0]
                ? regularResult[0].becameRegular
                : 0;


        // =====================================================
        // 14. FINAL RESPONSE
        // =====================================================

        return res.status(200).json({

            success: true,

            totalCustomers,

            totalFavouriteCustomers,

            fivePlusOrders,

            newCustomers,

            favouriteOrdersThisWeek,

            becameRegular,

            customers

        });


    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = getAllCustomers;