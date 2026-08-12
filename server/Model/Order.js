const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
   customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
},
    phoneNumber: {
      type: String,
      required: true,
    },

    dressType: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
    },

    
assignedTailor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tailor",
    required: true,
},

    orderDate: {
      type: Date,
      required: true,
      default: Date.now,
    },

    deliveryDate: {
      type: Date,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    advancePayment: {
      type: Number,
      default: 0,
    },

    remainingBalance: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);