import React, { useEffect, useState } from "react"
import { observer } from "mobx-react";

import { ListingItem } from "./ListingItem";
import { ListingItemIf, ListingsProps } from "./listingInterfaces";



export const Listings: React.FC<ListingsProps> = observer(({ listingStore, authStore }) => {
    const [categoriesSelected, setSelectedCategories] = useState<string[]>([]);
    const [listings, setListings] = useState<ListingItemIf[]>([]);

    useEffect(() => {
        const fetchedListings = listingStore.listings;
        if (categoriesSelected.length !== 0) {
            const filteredListings = fetchedListings.filter(listing =>
                categoriesSelected.every(category =>
                    (listing.role && listing.role.includes(category)) ||
                    (listing.level && listing.level.includes(category)) ||
                    (listing.languages && listing.languages.includes(category)) ||
                    (listing.tools && listing.tools.includes(category))

                )
            );

            setListings(filteredListings);
        } else {
            setListings(fetchedListings);
        }
    }, [categoriesSelected, listingStore.listings])

    const selectCategory = (category: string) => {
        if (categoriesSelected.includes(category)) {
            setSelectedCategories(categoriesSelected.filter((x) => x !== category));
        } else {
            setSelectedCategories([...categoriesSelected, category]);
        }
    };

    const clearCategories = () => {
        setSelectedCategories([]);
    }

    // const onClickDelete = (id: number) => {
    //     listingStore.
    // }


    return (
        <>
            {
                categoriesSelected.length !== 0 &&
                <section className='filtration-section'>
                    <ul>
                        {categoriesSelected.map(category =>
                            <li key={category} className='filtration-element'>{category} <button onClick={() => selectCategory(category)} className="close-button"><i className="fa fa-close"></i></button></li>)}
                    </ul>
                    <button onClick={clearCategories} className='clear-btn'>Clear</button>
                </section>
            }

            {

            }

            <section className='listing-section'>
                <ul>
                    {listings.map(listing =>
                        <ListingItem
                            key={listing.id}
                            listing={listing}
                            authStore={authStore}
                            selectCategory={selectCategory}
                            deleteItem={listingStore.deleteListing} />)}
                </ul>
            </section></>
    )
});