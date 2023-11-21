import { observable, action, makeObservable } from 'mobx';
import data from '../../data/data.json';
import { ListingItemIf } from './listingInterfaces';
import { authStore } from '../User/stores/AuthStore';


export class ListingStore {
    listings: ListingItemIf[] = [];

    constructor() {
        makeObservable(this, {
            listings: observable,
            addListing: action,
            deleteListing: action,
            editListing: action,
            getListing: action

        });
        this.listings = data;
    }

    addListing = (listingData: Partial<ListingItemIf>) => {
        const id = this.listings.length > 1 ? this.listings[this.listings.length - 1].id + 1 : 1;
        const user = authStore.user;
        const company = user.name;
        const logo = user.logo;

        const newListing: ListingItemIf = {
            id,
            company,
            logo,
            new: true,
            featured: false,
            postedAt: '1h ago',
            ...listingData
        } as ListingItemIf;

        this.listings.unshift(newListing);
        authStore.addListing(id);
    }

    editListing = (id: number, listingData: Partial<ListingItemIf>) => {
        const listing = this.getListing(id);

        if (listing) {
            Object.entries(listingData).forEach(([key, value]) => {
                (listing as any)[key] = value;
            });
        }
        
        this.listings = this.listings.map(l => l.id == id ? listing : l);
    }

    deleteListing = (id: number) => {
        this.listings = this.listings.filter(l => l.id !== id);
        authStore.delListing(id);
    }

    getListing = (id: number | undefined) => {
        return this.listings.filter(x => x.id === id)[0];
    }
}

export const listingStore = new ListingStore();