import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connect db");
  } catch (error) {
    console.log("error db", error.message);
  }
};

export default connectToMongoDB;
