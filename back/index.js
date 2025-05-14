require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const userRouter = require('./components/user/user-router');
const filmRouter = require('./components/film/film-router');
const multer = require('multer');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

// Настройка multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://1jfqnl4w-5173.euw.devtunnels.ms',
    'https://everbetai.com',
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Используем маршруты
app.use('/user', userRouter);
app.use('/film', filmRouter);

// MongoDB и запуск сервера
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server started on PORT = ${PORT}`);
    });
  } catch (e) {
    console.error('MongoDB connection error:', e);
  }
};

start();
