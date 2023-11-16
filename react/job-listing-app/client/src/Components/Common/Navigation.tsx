import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav className='site-nav'>
            <Link to="/" className='button nav-btn'>Listings</Link>
            <Link to="/register" className='button nav-btn'> Register</Link>
            <Link to="/login" className='button nav-btn'>Login</Link>
            <Link to="/login" className='button nav-btn'>Logout</Link>
        </nav>
    )
}