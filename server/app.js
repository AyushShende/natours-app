import express from 'express';
const app = express();
import { globalErrorHandler } from './middlewares/errorHandler.js';
import AppError from './utils/appError.js';
import tourRoutes from './routes/tourRoutes.js';
import userRoutes from './routes/userRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import { limiter } from './middlewares/limiter.js';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';

//      MIDDLEWARES

// Set security HTTP headers
app.use(helmet());

// Limit requests from same API (/api => applies to all routes starting with /api)
app.use('/api', limiter);

app.use(cookieParser());

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data Sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data Sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

//      ROUTES
app.use('/api/tours', tourRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
