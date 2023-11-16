import { observable, action, makeObservable } from 'mobx';
import data from '../../data/data.json';


export interface ListingItem {
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
    listing: ListingItem;
    selectCategory: (value:string) => void;
  }


export class ListingStore {
    listings: ListingItem[] = [];

    constructor() {
        makeObservable(this, {
            listings: observable,
            addListing: action,

        });
        this.listings = data;
    }

    addListing(listingData: Partial<ListingItem>) {
        const id = this.listings.length > 1 ? this.listings[this.listings.length - 1].id + 1 : 1;
        const newListing: ListingItem = {
            id,
            ...listingData
        } as ListingItem;

        this.listings.push(newListing);
    }
}

export const listingStore = new ListingStore();