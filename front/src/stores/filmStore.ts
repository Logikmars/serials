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

}

export default new FilmStore();
