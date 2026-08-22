const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      enum:["Tailor", "Manager","salesStaff","Cashier","Receptionist"],
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    joiningDate: {
      type: Date,
      required: true,
    },

    cnic: {
      type: String,
      required: true,
      unique: true,
    },

    employmentStatus: {
      type: String,
      enum: ["Active", "On Leave"],
      default: "Active",
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    monthlySalary: {
      type: Number,
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;