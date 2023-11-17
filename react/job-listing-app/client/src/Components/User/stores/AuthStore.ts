import { makeObservable, observable, action } from 'mobx';

export interface User {
    id: number | null;
    name: string | '';
    password?: string | '';
    logo: string | '';
}


export class AuthStore {
    isAuthenticated = false;
    user: User = {
        id: null,
        name: '',
        logo: ''
    };

    constructor() {
        makeObservable(this, {
            isAuthenticated: observable,
            user: observable,
            login: action,
            logout: action,
        });

        const storedData = localStorage.getItem("auth");
        if (storedData) {
            const authData = JSON.parse(storedData);
            this.isAuthenticated = authData.isAuthenticated;
            this.user = authData.user;
        }
    }

    login = (user: User) => {
        this.isAuthenticated = true;
        this.user = user;
        this.updateLocalStorage();
    }

    logout = () => {
        this.isAuthenticated = false;
        this.user = {
            id: null,
            name: '',
            logo: ''
        };
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem("auth", JSON.stringify({
            isAuthenticated: this.isAuthenticated,
            user: this.user,
        }));
    }
}

export const authStore = new AuthStore();
