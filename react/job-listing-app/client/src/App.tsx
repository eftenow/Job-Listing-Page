import '../public/css/main.scss'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './Components/Common/Navigation'
import { Listings } from './Components/Listing/Listings'
import { listingStore } from './Components/Listing/ListingStore'


function App() {

  return (
    <>
      <Navigation />

      <main>
        <Routes>
        <Route path='/' element={<Listings listingStore={listingStore} />} />
        </Routes>
      </main>

    </>
  )
}

export default App
