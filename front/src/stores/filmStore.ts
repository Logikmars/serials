import { makeAutoObservable } from "mobx";

class FilmStore {
  constructor() {
    makeAutoObservable(this);
  }

async sendDataToServer(filmData: any) {
  try {
    const formData = new FormData();

    // Добавляем данные фильма
    formData.append('filmName', filmData.filmName);
    formData.append('filmImage', filmData.filmImage);
    formData.append('filmDescription', filmData.filmDescription);
    formData.append('tags', filmData.tags);
    formData.append('filmEpisodes', filmData.filmEpisodes.toString());
    formData.append('filmEpisodesFree', filmData.filmEpisodesFree.toString());
    formData.append('releaseAt', filmData.releaseAt ? filmData.releaseAt.toISOString() : '');
    formData.append('liked', filmData.liked.toString());
    formData.append('isReleased', filmData.isReleased.toString());
    formData.append('isHot', filmData.isHot.toString());

    // Добавляем файл
    if (filmData.mediaFile) {
      formData.append('mediaFile', filmData.mediaFile); // предполагаем, что это объект File
    }

    console.log("Send:", formData);

    const response = await fetch("http://localhost:5000/film/newFilm", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Film data sent successfully");
    } else {
      const errorText = await response.text();
      console.error("Failed to send film data:", errorText);
    }
  } catch (error) {
    console.error("Error while sending film data:", error);
  }
}

async getAllFilms() {
  try {
    console.log('Start fetch all films');
    const response = await fetch("http://localhost:5000/film/getfilms");

    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }

    const films = await response.json();
    console.log('Полученные фильмы:', films);
    return films;
  } catch (error) {
    console.error("Error while fetching films:", error);
    return [];
  }
}

}

export default new FilmStore();
