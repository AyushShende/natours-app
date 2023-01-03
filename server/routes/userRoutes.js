import express from 'express';
const router = express.Router();
import {
  forgotPassword,
  // isLoggedIn,
  login,
  logout,
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

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
// router.get('/isLoggedIn', isLoggedIn);

// Protect all the following routes
router.use(protect);

router.get('/me', getMe, getUser);

router.patch('/updateMyPassword', updatePassword);
router.patch('/updateMe', updateMe);
router.delete('/deleteMe', deleteMe);

// Restrict the following routes to admin
router.use(restrictTo('admin'));

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default router;
