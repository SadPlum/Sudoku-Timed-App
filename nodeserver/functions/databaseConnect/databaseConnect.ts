import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const uri = `mongodb+srv://Admin:${process.env.DATABASE_PASSWORD}@cluster0.0hsqbbs.mongodb.net/gamesData?retryWrites=true&w=majority`;
// Establishes mongoDB connection
export const connectMongo = async () => {
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
