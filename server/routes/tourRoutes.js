import express from 'express';
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
} from '../controllers/tourController.js';
import { protect } from '../middlewares/protect.js';
import { restrictTo } from '../middlewares/restrict.js';
import reviewRoutes from '../routes/reviewRoutes.js';

router.use('/:tourId/reviews', reviewRoutes);

router.route('/tour-stats').get(getStats);

router
  .route('/monthly-plan/:year')
  .get(protect, restrictTo('admin', 'lead-guide', 'guide'), getMonthlyPlan);

router.route('/top-5-cheap').get(aliasTopTours, getAlltours);

router
  .route('/')
  .get(getAlltours)
  .post(protect, restrictTo('admin', 'lead-guide'), createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(protect, restrictTo('admin', 'lead-guide'), updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

export default router;
