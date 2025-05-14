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
      previewUrl: filmImageFile ? `/uploads/${filmImageFile.filename}` : null,
    });

    res.json('ok');
  } catch (e) {
    console.error('Ошибка в контроллере:', e);
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
