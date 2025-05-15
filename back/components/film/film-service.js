const filmModel = require('./film-model');
const FilmHistory = require('./film-history-model');
const path = require('path');
const fs = require('fs');

class FilmService {
  async saveFilm(data, userId = null) {
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
      mediaFilePath,
      filmImage
    } = data;

    const newFilm = await filmModel.create({
      name: filmName,
      description: filmDescription,
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      filmEpisodes: Number(filmEpisodes),
      filmEpisodesFree: Number(filmEpisodesFree),
      releaseIn: releaseAt ? new Date(releaseAt).getTime() : null,
      additionalStatus: `${liked === 'true' ? 'liked ' : ''}${isReleased === 'true' ? 'released ' : ''}${isHot === 'true' ? 'hot' : ''}`.trim(),
      mediaFilePath,
      filmImage
    });

    await FilmHistory.create({
      filmId: newFilm._id,
      action: 'created',
      userId,
      changes: newFilm.toObject(),
      mediaFilePath: newFilm.mediaFilePath,
      filmImage: newFilm.filmImage,
    });

    return newFilm;
  }

  async updateFilm(id, data, userId = null) {
    const film = await filmModel.findById(id);
    if (!film) return null;

    const hasNewMedia = data.mediaFilePath && data.mediaFilePath !== film.mediaFilePath;
    const hasNewImage = data.filmImage && data.filmImage !== film.filmImage;

    // Удаление старых файлов, только если пришли новые
    if (hasNewMedia && film.mediaFilePath) {
      const mediaPath = path.join(__dirname, '..', film.mediaFilePath);

      if (fs.existsSync(mediaPath)) {
        fs.unlink(mediaPath, (err) => {
          if (err) {
            console.error('Ошибка при удалении старого видео:', err.message);
          }
        });
      } else {
        console.warn('Файл для удаления не найден:', mediaPath);
      }
    }
    

    if (hasNewImage && film.filmImage) {
      const imagePath = path.join(__dirname, '..', film.filmImage);
      if (fs.existsSync(imagePath)) {
        fs.unlink(imagePath, (err) => {
          if (err) console.error('Ошибка при удалении старого изображения:', err.message);
        });
      } else {
        console.warn('Изображение для удаления не найдено:', imagePath);
      }
    }

    const updateData = {
      name: data.filmName ?? film.name,
      description: data.filmDescription ?? film.description,
      tags: data.tags ? data.tags.split(',').map(t => t.trim()) : film.tags,
      filmEpisodes: data.filmEpisodes ? Number(data.filmEpisodes) : film.filmEpisodes,
      filmEpisodesFree: data.filmEpisodesFree ? Number(data.filmEpisodesFree) : film.filmEpisodesFree,
      releaseIn: data.releaseAt ? new Date(data.releaseAt).getTime() : film.releaseIn,
      additionalStatus: `${data.liked === 'true' ? 'liked ' : ''}${data.isReleased === 'true' ? 'released ' : ''}${data.isHot === 'true' ? 'hot' : ''}`.trim() || film.additionalStatus,
      mediaFilePath: hasNewMedia ? data.mediaFilePath : film.mediaFilePath,
      filmImage: hasNewImage ? data.filmImage : film.filmImage,
    };

    const updatedFilm = await filmModel.findByIdAndUpdate(id, updateData, { new: true });

    if (updatedFilm) {
      await FilmHistory.create({
        filmId: updatedFilm._id,
        action: 'updated',
        userId,
        changes: updateData,
        mediaFilePath: updateData.mediaFilePath,
        filmImage: updateData.filmImage,
      });
    }

    return updatedFilm;
  }

  async deleteFilm(id, userId = null) {
    const deleted = await filmModel.findByIdAndDelete(id);

    if (deleted) {
      await FilmHistory.create({
        filmId: deleted._id,
        action: 'deleted',
        userId,
        changes: deleted.toObject(),
        mediaFilePath: deleted.mediaFilePath,
        filmImage: deleted.filmImage,
      });
    }

    return deleted;
  }

  async getFilms() {
    const films = await filmModel.find().sort({ createdAt: -1 });
    return films;
  }

  async getFilmById(id) {
    const film = await filmModel.findById(id);
    return film;
  }

  async getHistory() {
  const history = await FilmHistory.find().sort({ timestamp: -1 });
  return history;
}
}

module.exports = new FilmService();
