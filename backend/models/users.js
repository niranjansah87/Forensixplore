const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ID_NO: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  otpHash: {
    type: String,
  },
  otpCreatedAt: {
    type: Date,
  },
});

// Function to generate OTP hash
adminSchema.methods.generateOtpHash = async function (otp) {
  const saltRounds = 10;
  this.otpHash = await bcrypt.hash(otp, saltRounds);
};

// Function to compare provided OTP with hashed OTP
adminSchema.methods.compareOtp = function (otp) {
  return bcrypt.compare(otp, this.otpHash);
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
