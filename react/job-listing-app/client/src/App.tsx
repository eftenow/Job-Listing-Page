import { useState } from 'react'
import '../public/css/main.scss'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './Components/Common/Navigation'
import { Listings } from './Components/Listing/Listings'


function App() {
  const [listings, setListings] = useState([]);


  return (
    <>
      <Navigation />

      <main>
        <Routes>
          <Route path='/' element={<Listings />} />
        </Routes>
      </main>


    </>



  )
}

export default App
