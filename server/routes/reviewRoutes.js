import express from 'express';
const router = express.Router({ mergeParams: true });
import {
  checkUserId,
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
  .patch(restrictTo('user', 'admin'), checkUserId, updateReview)
  .delete(restrictTo('user', 'admin'), checkUserId, deleteReview);
export default router;
