import { observable, action, makeObservable } from 'mobx';
import usersData from "../../../data/usersData.json";
import { UserLocalStorage, authStore } from './AuthStore';


export interface UserItem {
    id: number,
    name: string,
    email: string,
    logo: string,
    password: string,
    isCompany: boolean,
    rePassword?: string,
    listings?: number[], // contains the ids of the job listings that the cuurent user(company) created
    applications?: number[]; //contains the ids of the listings which the user applied for
}

export interface RegisterProps {
    userStore: UserStore,
}

export interface LoginProps {
    onLogin: (user: UserLocalStorage) => void
}


export class UserStore {
    users: UserItem[] = [];

    constructor() {
        makeObservable(this, {
            users: observable,
            registerUser: action,

        });
        this.users = usersData;
    }

    registerUser(registerData: Partial<UserItem>) {
        const id = this.users.length > 1 ? this.users[this.users.length - 1].id + 1 : 1;
        const newUser: UserItem = {
            id,
            ...registerData
        } as UserItem;

        this.users.push(newUser);
        authStore.login({
            id: id,
            name: newUser.name,
            logo: newUser.logo
        });
    }
}

export const userStore = new UserStore();