const filmService = require('./film-service');

class filmController {
  async newFilm(req, res, next) {
    console.log('filmController работает');
    try {
      const file = req.file;
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
        mediaFilePath: file ? `/uploads/${file.filename}` : null,
      });

      res.json('ok');
    } catch (e) {
      console.error('Ошибка в контроллере:', e);
      next(e);
    }
  }
}

module.exports = new filmController();
