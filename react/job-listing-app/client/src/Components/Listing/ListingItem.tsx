import { ListingItemProps } from "./ListingStore";



export const ListingItem: React.FC<ListingItemProps> = ({ listing, selectCategory, user }) => {
    let currentUser;
    let alreadyApplied = false;
    let isOwner = false;

    if (user) {
        currentUser = user;
        alreadyApplied = user.applications ? listing.id in (user.applications) : false;
        isOwner = user.listings ? listing.id in (user.listings) : false;
    }

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const elementType = (e.target as HTMLParagraphElement).tagName.toLowerCase();
        if (elementType !== 'button') {
            return;
        }

        const selectedCategory = (e.target as HTMLDivElement).textContent;
        selectCategory(selectedCategory as string)
    }

    return (
        <li className='listing-card'>
            <div className='left-card-side'>
                <div className='img-container'><img src={listing.logo} alt={`${listing.company}'s logo`} /></div>
                <div className='listing-data'>
                    <p className='first-row'>{listing.company} {listing.new && <span className='features new'>NEW!</span>} {listing.featured && <span className='features featured'>FEATURED</span>}</p>
                    <p className='second-row'><a href="#">{listing.position}</a></p>
                    <p className='third-row'><span className='listing-specific'>{listing.postedAt}</span> &bull; <span className='listing-specific'>{listing.contract}</span> &bull; <span className='listing-specific'>{listing.location}</span> </p>
                    {currentUser &&
                        <div className="fourth-row">
                            {alreadyApplied 
                            ?<button><span className="btn-text">Apply</span> <span><i className="fa-solid fa-paper-plane icon"></i></span> </button>
                            : <button id="applied"><span className="btn-text">Already applied</span> <span><i className="fa-solid fa-check"></i></span> </button>}
                        </div>}
                </div>
            </div>
            <div className='right-card-side' onClick={(e) => onClick(e)}>
                <button className='button'>{listing.role}</button>
                <button className='button'>{listing.level}</button>
                {listing.languages.map(language => <button key={language} className='button'>{language}</button>)}
                {listing.tools.map(tool => <button key={tool} className='button'>{tool}</button>)}
            </div>
        </li>
    )
}