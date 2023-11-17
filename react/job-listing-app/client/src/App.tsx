import '../public/css/main.scss'

import { Route, Routes } from 'react-router-dom'
import { Navigation } from './Components/Common/Navigation'
import { Listings } from './Components/Listing/Listings'
import { Register } from './Components/User/Register'
import { Login } from './Components/User/Login'

import { listingStore } from './Components/Listing/ListingStore'
import { userStore } from './Components/User/stores/UserStore'
import { authStore } from './Components/User/stores/AuthStore'


function App() {
  return (
    <>
      <Navigation authStore={authStore} />

      <main>
        <Routes>
        <Route path='/' element={<Listings listingStore={listingStore} authStore={authStore} />} />
        <Route path='/login' element={<Login onLogin={authStore.login} />} />
        <Route path='/register' element={<Register userStore={userStore} />} />
        </Routes>
      </main>

    </>
  )
}

export default App
