import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import app from "./app.js";

//DB Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection Successful");
  } catch (error) {
    throw Error;
  }
};

app.listen(process.env.PORT || 4000, () => {
  connect();
  console.log(`Server started on ${process.env.PORT}`);
});
