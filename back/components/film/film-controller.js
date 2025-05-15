const filmService = require('./film-service');

class filmController {
  async newFilm(req, res, next) {
  console.log('filmController работает');
  try {
    // Получаем файлы
    const videoFile = req.files?.mediaFile?.[0];
    const filmImageFile = req.files?.filmImage?.[0];

    // Получаем остальные поля
    const {
      filmName,
      filmDescription,
      tags,
      filmEpisodes,
      filmEpisodesFree,
      releaseAt,
      liked,
      isReleased,
      isHot,
    } = req.body;

    await filmService.saveFilm({
      filmName,
      filmDescription,
      tags,
      filmEpisodes,
      filmEpisodesFree,
      releaseAt,
      liked,
      isReleased,
      isHot,
      mediaFilePath: videoFile ? `/uploads/${videoFile.filename}` : null,
      filmImage: filmImageFile ? `/uploads/${filmImageFile.filename}` : null,
    });

    res.json('ok');
  } catch (e) {
    console.error('Ошибка в контроллере:', e);
    next(e);
  }
}

async updateFilm(req, res, next) {
  try {
    const filmId = req.params.id;
    const videoFile = req.files?.mediaFile?.[0];
    const filmImageFile = req.files?.filmImage?.[0];

    const {
      filmName,
      filmDescription,
      tags,
      filmEpisodes,
      filmEpisodesFree,
      releaseAt,
      liked,
      isReleased,
      isHot,
    } = req.body;

    const updatedFilm = await filmService.updateFilm(filmId, {
      filmName,
      filmDescription,
      tags,
      filmEpisodes,
      filmEpisodesFree,
      releaseAt,
      liked,
      isReleased,
      isHot,
      mediaFilePath: videoFile ? `/uploads/${videoFile.filename}` : undefined,
      filmImage: filmImageFile ? `/uploads/${filmImageFile.filename}` : undefined,
    });

    if (!updatedFilm) {
      return res.status(404).json({ message: 'Фильм не найден' });
    }

    res.json(updatedFilm);
  } catch (e) {
    console.error('Ошибка при обновлении фильма:', e);
    next(e);
  }
}

  async deleteFilm(req, res, next) {
    try {
      const filmId = req.params.id;
      const deletedFilm = await filmService.deleteFilm(filmId);

      if (!deletedFilm) {
        return res.status(404).json({ message: 'Фильм не найден' });
      }

      res.json({ message: 'Фильм успешно удалён' });
    } catch (e) {
      console.error('Ошибка при удалении фильма:', e);
      next(e);
    }
  }

  async getFilms(req, res, next) {
  try {
    const films = await filmService.getFilms();
    res.json(films);
  } catch (e) {
    console.error('Ошибка при получении фильмов:', e);
    next(e);
  }
}
}

module.exports = new filmController();
