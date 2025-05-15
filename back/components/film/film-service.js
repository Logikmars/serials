const filmModel = require('./film-model');

class FilmService {
  async saveFilm(data) {
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

    console.log('Film saved:', newFilm);
    return newFilm;
  }

  async updateFilm(id, data) {
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

    const updateData = {
      name: filmName,
      description: filmDescription,
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      filmEpisodes: Number(filmEpisodes),
      filmEpisodesFree: Number(filmEpisodesFree),
      releaseIn: releaseAt ? new Date(releaseAt).getTime() : null,
      additionalStatus: `${liked === 'true' ? 'liked ' : ''}${isReleased === 'true' ? 'released ' : ''}${isHot === 'true' ? 'hot' : ''}`.trim(),
      mediaFilePath,
      filmImage,
    };

    const updatedFilm = await filmModel.findByIdAndUpdate(id, updateData, { new: true });

    return updatedFilm;
  }

  async deleteFilm(id) {
    const deleted = await filmModel.findByIdAndDelete(id);
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
}

module.exports = new FilmService();
