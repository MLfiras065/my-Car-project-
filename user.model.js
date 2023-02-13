const mongoose = require("mongoose");
const db = require("./index.js");
const cloudinary = require("cloudinary").v2;




cloudinary.config({
  cloud_name: "dgrmh7he5",
  api_key: "438475548974297",
  api_secret: "RT9HoHE0Wy5cr6igvzuYVgCUrV4",
});

  
const itemSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  cars: [
    {
      type: mongoose.Types.ObjectId,
      ref: "car",
    },
  ],
});

const carSchema = new mongoose.Schema({
  model: String,
  description: String,
  year: Number,
  storage:String,
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("user", itemSchema);
const Car = mongoose.model("car", carSchema);

module.exports = { User, Car };
