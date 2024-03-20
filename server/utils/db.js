import { mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

export const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log(`server is running on port ${port}`);
  } catch (err) {
    console.log("Error: " + err);
  }
};

// dbConnect()
