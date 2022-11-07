import express from "express";
const router = express.Router();

import {
  getAlltours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getStats,
  getMonthlyPlan,
} from "../controllers/tourController.js";

router.route("/tour-stats").get(getStats);

router.route("/monthly-plan/:year").get(getMonthlyPlan);

router.route("/top-5-cheap").get(aliasTopTours, getAlltours);

router.route("/").get(getAlltours).post(createTour);

router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

export default router;
