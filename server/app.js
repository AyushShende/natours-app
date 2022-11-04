import express from "express";
const app = express();
import tourRoutes from "./routes/tourRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//      MIDDLEWARES
app.use(express.json());

app.use("/api/tours", tourRoutes);
app.use("/api/users", userRoutes);

export default app;
