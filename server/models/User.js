import mongoose from "mongoose";

//name, email, password, passwordConfirm, photo

const userSchema = new mongoose.Schema({});

export default mongoose.model("User", userSchema);
