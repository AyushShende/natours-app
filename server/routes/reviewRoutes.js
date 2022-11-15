import express from 'express';
const router = express.Router({ mergeParams: true });
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReview,
  setTourUserIds,
  updateReview,
} from '../controllers/reviewController.js';
import { protect } from '../middlewares/protect.js';
import { restrictTo } from '../middlewares/restrict.js';

router.use(protect);

router
  .route('/')
  .get(getAllReviews)
  .post(restrictTo('user'), setTourUserIds, createReview);

router
  .route('/:id')
  .get(getReview)
  .patch(restrictTo('user', 'admin'), updateReview)
  .delete(restrictTo('user', 'admin'), deleteReview);
export default router;
