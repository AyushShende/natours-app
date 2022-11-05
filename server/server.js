import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from "mongoose";

//DB Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection Successful");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT || 4000, () => {
  connect();
  console.log(`Server started on ${process.env.PORT}`);
});
