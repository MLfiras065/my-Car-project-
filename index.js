const express = require("express");
const itemRoutes = require("./routes/item.routes");
const cloudinary = require("cloudinary").v2;

const db = require("./database-mongo/user.model");
cloudinary.config({
  secure: true,
});
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/items", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
