const express = require("express");
const {
  getAllUsers,
  getOneUser,
  newUser,
} = require("../controller/userController");

const updateUser = (req, res) => {
    res.send('User updated');
};

const deleteUser = (req, res) => {
    res.send("User deleted successfully");
};

module.exports = {
    updateUser
};

const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.get("/getOneUser/:id", getOneUser);
router.post("/newUser", newUser);
router.patch("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;

