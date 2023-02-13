const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const multer = require("multer")
// const parser = multer({ storage: storage });
const { User, Car } = require("../database-mongo/user.model.js");
const selectAllUsers = async function (req, res) {
  try {
    const user = await User.find({});
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

const selectAll = async function (req, res) {
  try {
    const cars = await Car.find({}).populate("owner", "name");
    res.status(200).send(cars);
  } catch (error) {
    console.log(error);
  }
};

const addCar = async (req, res) => {
  try {
    const car = await Car.create({
      model: req.body.model,
      description: req.body.description,
      year: req.body.year,
      user: req.params.id,
    });

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $push: { cars: car },
      },
      { new: true }
    );

    res.json({
      car,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userDeleted = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({ userDeleted });
  } catch (err) {
    console.log(err);
  }
};

const deleteCar = async (req, res) => {
  try {
    const carDeleted = await Car.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({ carDeleted });
  } catch (err) {
    console.log(err);
  }
};
const updateUser = async (req, res) => {
  try {
    const userupdated = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).send({ userupdated });
  } catch (err) {
    console.log(err);
  }
};

const updateCar = async (req, res) => {
  try {
    const carupdated = await Car.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );

    res.status(200).send({ carupdated });
  } catch (err) {
    console.log(err);
  }
};
const registerUser = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      res.status(200).send({ user });
    })
    .catch((err) => {
      console.log(err);
    });
};
const logIn = async (req, res, email) => {
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser || req.body.password != password) {
    const error = Error("Wrong details please check at once");
  }
  let token;
  try {
    token = jwt.sign(
      { name: req.body.name, email: req.body.email },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({
    success: true,
    data: {
      name: req.body.name,
      email: req.body.email,
      token: token,
    },
  });
};
// const addImage=(req,res,)=>{
//   parser.single("image")
//   const image = {};
//   image.url = req.file.url;
//   image.id = req.file.public_id;
//   Image.create(image)
//     .then(newImage => res.json(newImage))
//     .catch(err => console.log(err));
// }
// const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "demo",
//   allowedFormats: ["jpg", "png"],
//   transformation: [{ width: 500, height: 500, crop: "limit" }]
//   });

module.exports = {
  selectAll,
  selectAllUsers,
  addCar,
  addUser,
  deleteCar,
  deleteUser,
  updateCar,
  updateUser,
  registerUser,
  logIn,
  // addImage
};
