const mongoose = require("mongoose");

const connectToMongo = async (url) => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB connection failed", err);
    throw err; // Re-throw to propagate the error
  }
};

module.exports = {
  connectToMongo,
};
