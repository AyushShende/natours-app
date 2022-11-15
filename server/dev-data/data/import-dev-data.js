import dotenv from 'dotenv';
dotenv.config();
import * as fs from 'fs';
import mongoose from 'mongoose';
import Review from '../../models/Review.js';
import Tour from '../../models/Tour.js';
import User from '../../models/User.js';

//DB Connection
const connect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('DB Connection Successful');
};

// Read file
// const path = new URL('tours.json', import.meta.url);

const tours = JSON.parse(
  fs.readFileSync(new URL('tours.json', import.meta.url), 'utf-8')
);
const users = JSON.parse(
  fs.readFileSync(new URL('users.json', import.meta.url), 'utf-8')
);
const reviews = JSON.parse(
  fs.readFileSync(new URL('reviews.json', import.meta.url), 'utf-8')
);

// Import data into DB
const importData = async () => {
  try {
    await connect();
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log('Data successfully loaded');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await connect();
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log('Data successfully deleted!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
