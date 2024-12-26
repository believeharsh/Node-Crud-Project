const userMongo = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  try {
    const allDbUsers = await userMongo.find({});
    res.setHeader("X-myName", "Harsh Dahiya");
    return res.json(allDbUsers);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to retrieve users", details: error.message });
  }
};

const handleGetUserById = async (req, res) => {
  const user = await userMongo.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
};

const handleDeleteUserById = async (req, res) => {
  const user = await userMongo.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
};

const handleUpdateUserById = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from URL
    const updateData = req.body; // Extract update data from request body

    // Find user by ID and update
    const user = await userMongo.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    // Handle case if user is not found
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the updated user
    return res.json(user);
  } catch (err) {
    // Handle errors (e.g., invalid ObjectId, database issues)
    return res
      .status(500)
      .json({ error: "An error occurred", details: err.message });
  }
};

const handleAddNewUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await userMongo.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });

  return res.status(201).json({ msg: "Successfully created user" });
};

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleAddNewUser,
  handleUpdateUserById
};
