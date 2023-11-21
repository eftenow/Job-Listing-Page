import { AuthStore } from "../User/stores/AuthStore";
import { ListingStore } from "./ListingStore";

export interface SelectionListStates {
    isLanguageListOpen: boolean;
    isToolListOpen: boolean;
    isRoleListOpen: boolean;
    isLevelListOpen: boolean;
    isContractListOpen: boolean;
}

export interface SelectedItems {
    selectedLanguages: string[];
    selectedTools: string[];
    selectedRole: string | null;
    selectedLevel: string | null;
    selectedContract: string | null;
}

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
    authStore: AuthStore;
    deleteItem: (id: number) => void;
}

export interface ListingsProps {
    listingStore: ListingStore,
    authStore: AuthStore
}

export interface CreateListingProps {
    listingStore: ListingStore,
}