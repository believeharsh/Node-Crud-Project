const express = require("express");
const { connectToMongo } = require("./connection.js");
const userRouter = require("./routes/user.js"); // Import routes

const app = express();
const PORT = 8000;

// MongoDB Connection
connectToMongo("mongodb://127.0.0.1:27017/NodeCrudProject")
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => console.log("MongoDB connection error:", err));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRouter); // Use routes with base URL /api/users

// Fallback Route for 404 handling
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
