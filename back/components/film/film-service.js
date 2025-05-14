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
    previewUrl
  } = data;

  const newFilm = await filmModel.create({
    name: filmName,
    description: filmDescription,
    tags: tags ? tags.split(',').map(t => t.trim()) : [],
    episodesCount: Number(filmEpisodes),
    episodesCountFree: Number(filmEpisodesFree),
    releaseIn: releaseAt ? new Date(releaseAt).getTime() : null,
    additionalStatus: `${liked === 'true' ? 'liked ' : ''}${isReleased === 'true' ? 'released ' : ''}${isHot === 'true' ? 'hot' : ''}`.trim(),
    mediaFilePath,
    previewUrl
  });

    console.log('Film saved:', newFilm);
    return newFilm;
  }

  async getFilms() {
    const films = await filmModel.find().sort({ createdAt: -1 });
    return films;
  }
}

module.exports = new FilmService();
