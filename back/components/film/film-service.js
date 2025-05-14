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
      mediaFilePath
    } = data;

    const newFilm = await filmModel.create({
      name: filmName,
      description: filmDescription,
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      episodesCount: Number(filmEpisodes),
      episodesCountFree: Number(filmEpisodesFree),
      releaseIn: releaseAt ? new Date(releaseAt).getTime() : null,
      additionalStatus: `${liked === 'true' ? 'liked ' : ''}${isReleased === 'true' ? 'released ' : ''}${isHot === 'true' ? 'hot' : ''}`.trim(),
      mediaFilePath
    });

    console.log('Film saved:', newFilm);
    return newFilm;
  }
}

module.exports = new FilmService();
