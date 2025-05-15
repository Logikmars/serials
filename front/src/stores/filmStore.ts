import { makeAutoObservable } from "mobx";
import api from './api';
import axios from "axios";

class FilmStore {
  constructor() {
    makeAutoObservable(this);
  }

  async sendDataToServer(formData: FormData) {
    try {
      const response = await api.post('/film/newFilm', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Film data sent successfully', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Failed to send film data:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async getAllFilms(): Promise<Record<string, any>[]> {
    try {
      console.log('Start fetch all films');

      const { data } = await api.get<Record<string, any>[]>("/film/getfilms");
      console.log('Полученные фильмы:', data);

      const films = data.map((film) => ({
        ...film,
        mediaFilePath: film.mediaFilePath?.replace('/uploads/', 'https://contentlooktwice.demotest.live/'),
        previewUrl: film.previewUrl?.replace('/uploads/', 'https://contentlooktwice.demotest.live/')
      }));

      return films;
    } catch (error) {
      console.error("Error while fetching films:", error);
      return [];
    }
  }

  async updateFilm(id: string, formData: FormData) {
    try {
      const response = await api.put(`/film/editFilm/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Фильм обновлён:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Ошибка при обновлении фильма:', error.response?.data || error.message);
      } else {
        console.error('Неизвестная ошибка:', error);
      }
    }
  }

  async deleteFilm(id: string) {
    try {
      const response = await api.delete(`/film/deleteFilm/${id}`);
      console.log('Фильм удалён:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Ошибка при удалении фильма:', error.response?.data || error.message);
      } else {
        console.error('Неизвестная ошибка:', error);
      }
    }
  }

  async getFilmById(id: string) {
    const res = await api.get(`/film/${id}`);
    console.log('Полученный фильм: ', res.data);

    return res.data;
  }

}

export default new FilmStore();
