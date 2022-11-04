import express from "express";
const router = express.Router();

import {
  getAlltours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} from "../controllers/tourController.js";

router.route("/").get(getAlltours).post(createTour);

router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

export default router;
