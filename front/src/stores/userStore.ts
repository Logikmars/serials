import { makeAutoObservable } from 'mobx';
import api from './api';

interface UserData {
    accessToken: string;
    user: {
        email: string;
        balance: number;
    };
}

class Store {
    auth = false;
    email = '';

    constructor() {
        makeAutoObservable(this);
    }

    async init(): Promise<void> {
        console.log('init');
    }

    async login(email: string, password: string): Promise<void> {
        const { data } = await api.post<UserData>('/user/login', { email, password });
        this.setData(data);
    }

    async register(email: string, password: string): Promise<void> {
        const { data } = await api.post<UserData>('/user/register', { email, password });
        this.setData(data);
    }

    async setData(data: UserData): Promise<void> {
        localStorage.setItem('token', data.accessToken);
        this.auth = true;
        this.email = data.user.email;
    }

    async logout(): Promise<void> {
        await api.post('/user/logout');
        localStorage.removeItem('token');
        this.auth = false;
    }

    async refresh(): Promise<void> {
        if (localStorage.getItem('token')) {
            const { data } = await api.post<UserData>('/user/refresh');
            this.setData(data);
        }
    }
}

export default new Store();
