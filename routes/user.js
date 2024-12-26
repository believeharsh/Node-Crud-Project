const express = require("express");
const router = express.Router();
const userMongo = require("../models/user");

const {
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleAddNewUser,
  handleUpdateUserById
} = require("../controllers/user");

router.get("/", handleGetAllUsers);
router.post("/", handleAddNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .delete(handleDeleteUserById)
  .patch(handleUpdateUserById);

module.exports = router;
