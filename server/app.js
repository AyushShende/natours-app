import express from "express";
const app = express();
import { globalErrorHandler } from "./middlewares/errorHandler.js";
import AppError from "./utils/appError.js";
import tourRoutes from "./routes/tourRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//      MIDDLEWARES
app.use(express.json());

//      ROUTES
app.use("/api/tours", tourRoutes);
app.use("/api/users", userRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
