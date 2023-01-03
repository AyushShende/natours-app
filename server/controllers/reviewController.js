import Review from '../models/Review.js';
import AppError from '../utils/appError.js';
import catchAsync from '../middlewares/catchAsync.js';
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from './handlerFactory.js';

export const setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

export const checkUserId = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (req.user.id !== review.user.id)
    return next(new AppError('You are not allowed to do that', 403));
  next();
});

export const createReview = createOne(Review);

export const getReview = getOne(Review);

export const updateReview = updateOne(Review);

export const deleteReview = deleteOne(Review);

export const getAllReviews = getAll(Review);
