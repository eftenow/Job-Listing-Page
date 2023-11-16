export const Listings = () => {
    return (
        <>
            <section className='filtration-section'>
                <ul>
                    <li className='filtration-element'>HTML <button className="close-button"><i className="fa fa-close"></i></button></li>
                    <li className='filtration-element'>CSS <button className="close-button"><i className="fa fa-close"></i></button></li>
                    <li className='filtration-element'>JavaScript <button className="close-button"><i className="fa fa-close"></i></button></li>
                </ul>
                <button className='clear-btn'>Clear</button>
            </section>

            <section className='listing-section'>
                <ul>
                    
                </ul>
            </section></>
    )
}