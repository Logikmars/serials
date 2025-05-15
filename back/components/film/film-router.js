const express = require('express');
const multer = require('multer');
const path = require('path');
const filmController = require('./film-controller');
const filmService = require('./film-service'); // Импортируем сервис для обработки данных

// Настроим хранилище для multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Указываем папку для хранения файлов
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Уникальное имя для файла
  },
});

const upload = multer({ storage });

const filmRouter = express.Router();

// Middleware для обработки JSON и URL-encoded данных
filmRouter.use(express.json());
filmRouter.use(express.urlencoded({ extended: true }));

filmRouter.post('/newFilm', upload.fields([
  { name: 'mediaFile', maxCount: 1 },
  { name: 'filmImage', maxCount: 1 }
]), filmController.newFilm);

filmRouter.put('/editFilm/:id', upload.fields([
  { name: 'mediaFile', maxCount: 1 },
  { name: 'filmImage', maxCount: 1 }
]), filmController.updateFilm);

filmRouter.get('/getfilms', filmController.getFilms);
filmRouter.delete('/deleteFilm/:id', filmController.deleteFilm);

module.exports = filmRouter;
