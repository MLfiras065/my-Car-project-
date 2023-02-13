const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.selectAll);
router.get("/get", userController.selectAllUsers);
router.post("/postUser", userController.addUser);
router.put("/updUser/:id", userController.updateUser);
router.delete("/deletUser/:id", userController.deleteUser);
router.post("/postCar/:id", userController.addCar);
router.delete("/deletCar/:id", userController.deleteCar);
router.put("/updCar/:id", userController.updateCar);
router.post("/PostRej", userController.registerUser);
router.post("/logIn", userController.logIn);
// router.post('/addImage',userController.addImage)
module.exports = router;
