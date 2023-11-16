export const ListingItem = ({ listing }) => {

    return (
        <li className='listing-card'>
            <div className='left-card-side'>
                <div className='img-container'><img src="../public/images/photosnap.svg" alt="photoshop" /></div>
                <div className='listing-data'>
                    <p className='first-row'>Photosnap <span className='features new'>NEW!</span> <span className='features featured'>FEATURED</span></p>
                    <p className='second-row'><a href="#">Senior Frontend Developer</a></p>
                    <p className='third-row'><span className='listing-specific'>1d ago</span> &bull; <span className='listing-specific'>Full time</span> &bull; <span className='listing-specific'>USA Only</span> </p>
                </div>
            </div>
            <div className='right-card-side'>
                <button className='button'>Frontend</button>
                <button className='button'>Senior</button>
                <button className='button'>HTML</button>
                <button className='button'>CSS</button>
            </div>
        </li>
    )
}