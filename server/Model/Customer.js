const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    email: {
      type: String,
      trim: true,
      lowercase: true
    },

    city: {
      type: String,
      required: true,
      trim: true
    },

    address: {
      type: String,
      trim: true
    },

    status: {
      type: String,
      enum: ["New", "Regular", "Favourite"],
      default: "New"
    },
  },
  {
    timestamps: true
  }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;