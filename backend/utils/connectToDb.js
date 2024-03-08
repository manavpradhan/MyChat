import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("error connecting to MongoDB:  ", error);
  }
};

export default connection;
