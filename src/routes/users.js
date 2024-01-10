const express = require('express')
const {getAllUsers, getUserById, deleteUserById, updateUserById} = require('../controllers/users')

router = express.Router();


router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.put("/users/:id", updateUserById);

module.exports = router