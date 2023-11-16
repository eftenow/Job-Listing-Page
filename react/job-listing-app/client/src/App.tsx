import { useState } from 'react'
import '../public/css/main.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='site-nav'>
        <button className='button nav-btn'>Listings</button>
        <button className='button nav-btn'>Register</button>
        <button className='button nav-btn'>Login</button>
        <button className='button nav-btn'>Logout</button>
      </nav>

      <main>
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
          </ul>
        </section>
      </main>

    </>

  )
}

export default App