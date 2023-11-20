import { observable, action, makeObservable } from 'mobx';
import data from '../../data/data.json';
import { UserLocalStorage } from '../User/stores/AuthStore';


export interface ListingItemIf {
    "id": number,
    "company": string,
    "logo": string,
    "new": boolean,
    "featured": boolean,
    "position": string,
    "role": string,
    "level": string,
    "postedAt": string,
    "contract": string,
    "location": string,
    "languages": string[],
    "tools": string[]
}

export interface ListingItemProps {
    listing: ListingItemIf;
    selectCategory: (value: string) => void;
    user: UserLocalStorage | null;
}


export class ListingStore {
    listings: ListingItemIf[] = [];

    constructor() {
        makeObservable(this, {
            listings: observable,
            addListing: action,

        });
        this.listings = data;
    }

    addListing(listingData: Partial<ListingItemIf>) {
        const id = this.listings.length > 1 ? this.listings[this.listings.length - 1].id + 1 : 1;
        const newListing: ListingItemIf = {
            id,
            ...listingData
        } as ListingItemIf;

        this.listings.push(newListing);
    }
}

export const listingStore = new ListingStore();