const Customer = require('../Model/Customer');  
const jwt = require('jsonwebtoken');
const User = require('../Model/User');
const orders=require("../Model/Order")
const getAllCustomers = async (req, res) => {
    try{
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const user_id=decoded.id;
    const role=decoded.role;
    if(role!=="owner"){
        return res.status(403).json({
            success:false,
            message:"Access denied"
        });
    }
if(!user_id){
    return res.status(404).json({
        success:false,
        message:"Null Id"
    });
}
const user=await User.findById(user_id);
if(!user){
    return res.status(404).json({
        success:false,
        message:"User not found"
    });
}
const customers=await Customer.find();
const totalCustomers=await Customer.countDocuments();
const favCustomers= await Customer.countDocuments(
    {
        status:"Favourite"
    }
)
const fav=favCustomers.length();

const result = await orders.aggregate([
    {
        $group: {
            _id: "$customer",
            totalOrders: { $sum: 1 }
        }
    },
    {
        $match: {
            totalOrders: { $gte: 5 }
        }
    },
    {
        $count: "customers"
    }
]);
const fivePlusOrders = result[0] ? result[0].customers : 0;

const today = new Date();
const day=today.getDay();
const month=today.getMonth();
const week=today.getDay();
const diff = day === 0 ? 6 : day - 1;

// Current week ka Monday
const weekStart = new Date(today);
weekStart.setDate(today.getDate() - diff);
weekStart.setHours(0, 0, 0, 0);

// Current week ka Sunday
const weekEnd = new Date(weekStart);
weekEnd.setDate(weekStart.getDate() + 6);
weekEnd.setHours(23, 59, 59, 999);

let newCustomers = 0;
let favCustomersOrder=0;
for (const customer of customers) {

    const customerOrders = await orders.find({
        customer: customer._id
    });

    if (customerOrders.length === 0) {
        continue;
    }
;
    customerOrders.sort((a, b) => 
        new Date(a.orderDate) - new Date(b.orderDate)
    );

    const firstOrder = customerOrders[0];

    const orderDate = new Date(firstOrder.orderDate);
    const today = new Date();

    if (
        orderDate.getMonth() === today.getMonth() &&
        orderDate.getFullYear() === today.getFullYear()
    ) {
        newCustomers++;
    }
}

for (const favCustomer of favCustomers) {

    const customerOrders = await orders.find({
        customer: favCustomer._id
    });

    customerOrders.forEach((order) => {

        const orderDate = new Date(order.orderDate);

        if (
            orderDate >= weekStart &&
            orderDate <= weekEnd
        ) {
            favouriteOrdersThisWeek++;
        }

    });
}
const regularResult = await orders.aggregate([
    {
        $sort: {
            customer: 1,
            orderDate: 1
        }
    },

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

    {
        $match: {
            totalOrders: { $gte: 5 }
        }
    },

    {
        $project: {
            fifthOrderDate: {
                $arrayElemAt: ["$orders", 4]
            }
        }
    },

    {
        $match: {
            fifthOrderDate: {
                $gte: monthStart,
                $lt: nextMonthStart
            }
        }
    },

    {
        $count: "becameRegular"
    }
]);

const becameRegular = result[0]
    ? result[0].becameRegular
    : 0;
res.status(200).json({
    success:true,
    totalCustomers,
    customers
});


    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

