const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = `mongodb+srv://Admin:${process.env.DATABASE_PASSWORD}@cluster0.0hsqbbs.mongodb.net/?retryWrites=true&w=majority`;

// Establishes mongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(uri).then(() => {
      console.log("connected to database");
      return true;
    });
  } catch (error) {
    console.log("Connection error", error);
    return false;
  }
};

module.exports = connect;
