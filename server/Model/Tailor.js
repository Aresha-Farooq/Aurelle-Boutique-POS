const mongoose = require("mongoose");

const tailorSchema = new mongoose.Schema(
    {
        tailorName: {
            type: String,
            required: true,
            trim: true
        },

        phoneNumber: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },

        CNIC: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        gender: {
            type: String,
            enum: ["Male", "Female"],
            required: true
        },

        specialization: {
            type: String,
            enum: [
                "Luxury Dresses",
                "Bridal Wear",
                "Formal Wear",
                "Casual Wear",
                "Alterations",
                "Other"
            ],
            required: true
        },

        experience: {
            type: String,
            required: true,
            trim: true
        },

        joiningDate: {
            type: Date,
            required: true
        },

        availability: {
            type: String,
            enum: ["Available", "Unavailable"],
            default: "Available"
        },

        monthlySalary: {
            type: Number,
            required: true,
            min: 0
        },

        address: {
            type: String,
            required: true,
            trim: true
        }
    },

    {
        timestamps: true
    }
);

const Tailor = mongoose.model("Tailor", tailorSchema);

module.exports = Tailor;