import User from '../models/User.js';
import AppError from '../utils/appError.js';
import catchAsync from '../middlewares/catchAsync.js';
import { deleteOne, getAll, getOne, updateOne } from './handlerFactory.js';

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

export const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

export const updateMe = catchAsync(async (req, res, next) => {
  //1. Create error if user tries to change password
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword for that',
        400
      )
    );
  }
  //2. Filtered out unwanted fields names that are not allowed to be updated
  const filterBody = filterObj(req.body, 'name', 'email');

  //3. Update current user details
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: updatedUser,
  });
});

//
//

export const deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

export const createUser = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined, Please use /signup instead',
  });
};

export const getUser = getOne(User);

export const updateUser = updateOne(User);

export const deleteUser = deleteOne(User);

export const getAllUsers = getAll(User);
