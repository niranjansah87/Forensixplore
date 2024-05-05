const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
      required: true,
      unique: true,
    },
    ID_NO:{
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
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
  }
);


const User = mongoose.model("Admin", adminSchema);
module.exports = User;
