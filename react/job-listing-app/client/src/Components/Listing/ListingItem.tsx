import { ListingItemProps } from "./ListingStore";
import { observer } from "mobx-react";
import { runInAction } from 'mobx';


export const ListingItem: React.FC<ListingItemProps> = observer(({ listing, selectCategory, authStore }) => {
    const user = authStore.user;
    const alreadyApplied = user?.applications ? user.applications.includes(listing.id) : false;
    const isOwner = user?.listings ? user.listings.includes(listing.id) : false;

    const onClickSelectFilter = (e: React.MouseEvent<HTMLDivElement>) => {
        const elementType = (e.target as HTMLParagraphElement).tagName.toLowerCase();
        if (elementType !== 'button') {
            return;
        }

        const selectedCategory = (e.target as HTMLDivElement).textContent;
        selectCategory(selectedCategory as string)
    }

    const onClickApply = (id: number) => {
        runInAction(() => {
            authStore.user.applications?.push(id);
        });
    };

    return (
        <li className='listing-card'>
            <div className='left-card-side'>
                <div className='img-container'><img src={listing.logo} alt={`${listing.company}'s logo`} /></div>
                <div className='listing-data'>
                    <p className='first-row'>{listing.company} {listing.new && <span className='features new'>NEW!</span>} {listing.featured && <span className='features featured'>FEATURED</span>}</p>
                    <p className='second-row'><a href="#">{listing.position}</a></p>
                    <p className='third-row'><span className='listing-specific'>{listing.postedAt}</span> &bull; <span className='listing-specific'>{listing.contract}</span> &bull; <span className='listing-specific'>{listing.location}</span> </p>

                    {authStore.isAuthenticated && (
                        <div className="fourth-row">
                            {user?.isCompany
                                ? isOwner &&
                                <>
                                    <button>
                                        <span className="btn-text">Edit</span>
                                        <span>
                                            <i className="fa-solid fa-pen-to-square icon"></i>
                                        </span>
                                    </button>

                                    <button>
                                        <span className="btn-text">Delete</span>
                                        <span>
                                            <i className="fa-solid fa-trash icon"></i>
                                        </span>
                                    </button>

                                </>

                                : alreadyApplied ?
                                    <button id="applied">
                                        <span className="btn-text">Already applied</span>
                                        <span>
                                            <i className="fa-solid fa-check icon"></i>
                                        </span>
                                    </button>
                                    :


                                    <button onClick={() => onClickApply(listing.id)}>
                                        <span className="btn-text">Apply</span>
                                        <span>
                                            <i className="fa-solid fa-paper-plane icon"></i>
                                        </span>
                                    </button>
                            }
                        </div>
                    )}

                </div>
            </div >
            <div className='right-card-side' onClick={(e) => onClickSelectFilter(e)}>
                <button className='button'>{listing.role}</button>
                <button className='button'>{listing.level}</button>
                {listing.languages.map(language => <button key={language} className='button'>{language}</button>)}
                {listing.tools.map(tool => <button key={tool} className='button'>{tool}</button>)}
            </div>
        </li >
    )
})