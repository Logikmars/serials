import axios from 'axios';

// const dev = import.meta.env.VITE_DEV || false;

// let API_URL = "https://api.everbetai.com";
let API_URL = "http://localhost:5000";
// let API_URL = "https://1jfqnl4w-5000.euw.devtunnels.ms";

// if (dev) {
//     API_URL = "http://localhost:5000";
// }

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true // Теперь axios отправляет cookies
});

// Интерцептор для добавления токена в заголовок
api.interceptors.request.use(async (config) => {
    let token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));


api.interceptors.response.use(
    response => response,
    async (error) => {
        if (error.response?.status === 401) {
            const res = await axios.post(`${API_URL}/user/refresh`, {}, { withCredentials: true });
            localStorage.setItem('token', res.data.accessToken);
            error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
            return axios(error.config);
        }
        return Promise.reject(error);
    }
);


export default api;
