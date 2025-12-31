const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    bloodGroup: {
        type: String,
        required: true
    },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    contact: { type: String, required: true },
    lastDonationDate: { type: Date, required: true },
},
    { timestamps: true });

module.exports = mongoose.model("Donor", donorSchema);