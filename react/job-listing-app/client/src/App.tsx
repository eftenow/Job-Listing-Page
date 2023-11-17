import '../public/css/main.scss'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './Components/Common/Navigation'
import { Listings } from './Components/Listing/Listings'
import { listingStore } from './Components/Listing/ListingStore'
import { Register } from './Components/User/Register'
import { Login } from './Components/User/Login'


function App() {

  return (
    <>
      <Navigation />

      <main>
        <Routes>
        <Route path='/' element={<Listings listingStore={listingStore} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        </Routes>
      </main>

    </>
  )
}

export default App
