import express from 'express';
import {
  forgotPassword,
  login,
  resetPassword,
  signup,
  updatePassword,
} from '../controllers/authController.js';
import {
  createUser,
  deleteMe,
  deleteUser,
  getAllUsers,
  getMe,
  getUser,
  updateMe,
  updateUser,
} from '../controllers/userController.js';
import { protect } from '../middlewares/protect.js';
import { restrictTo } from '../middlewares/restrict.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

// Protect all the following routes
router.use(protect);

router.patch('/updateMyPassword', protect, updatePassword);
router.get('/me', protect, getMe, getUser);
router.patch('/updateMe', protect, updateMe);
router.delete('/deleteMe', protect, deleteMe);

// Restrict the following routes to admin
router.use(restrictTo('admin'));

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default router;
