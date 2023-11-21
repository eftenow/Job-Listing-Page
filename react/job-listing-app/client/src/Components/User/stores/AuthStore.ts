import { makeObservable, observable, action } from 'mobx';

export interface UserLoginData {
    id: number | null;
    name: string | '';
    password: string | '';
}

export interface UserLocalStorage {
    id: number | null;
    name: string | '';
    logo: string | '';
    isCompany: boolean;
    listings?: number[];
    applications?: number[];
}


export class AuthStore {
    isAuthenticated = false;
    user: UserLocalStorage = {
        id: null,
        name: '',
        logo: '',
        isCompany: false,
        listings: [],
        applications: []
    };

    constructor() {
        makeObservable(this, {
            isAuthenticated: observable,
            user: observable,
            login: action,
            logout: action,
            delListing: action,
            addListing: action
        });

        const storedData = localStorage.getItem("auth");
        if (storedData) {
            const authData = JSON.parse(storedData);
            this.isAuthenticated = authData.isAuthenticated;
            this.user = authData.user;
        }
    }

    login = (user: UserLocalStorage) => {
        this.isAuthenticated = true;
        this.user = user;
        this.updateLocalStorage();
    }

    logout = () => {
        this.isAuthenticated = false;
        this.user = {
            id: null,
            name: '',
            logo: '',
            isCompany: false,
            listings: [],
            applications: []
        };
        this.updateLocalStorage();
    }

    addListing = (listingId:number) => {
        this.user.listings?.push(listingId);
        this.updateLocalStorage();
    }

    delListing = (listingId:number) => {
        this.user.listings?.filter(x => x == listingId);
    }

    updateLocalStorage() {
        localStorage.setItem("auth", JSON.stringify({
            isAuthenticated: this.isAuthenticated,
            user: this.user,
        }));
    }
}

export const authStore = new AuthStore();
