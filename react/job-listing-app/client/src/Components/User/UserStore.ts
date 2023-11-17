import { observable, action, makeObservable } from 'mobx';
import usersData from "../../data/usersData.json"; 


export interface UserItem {
    id: number,
    name: string,
    email: string,
    logo: string,
    password: string,
    rePassword?: string;
}

export interface RegisteredItemProps {
    registerData: UserItem;
    // registerUser: (data: RegisterObject) => void;
}


export class ListingStore {
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
        
    }
}

export const listingStore = new ListingStore();