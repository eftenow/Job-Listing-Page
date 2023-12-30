import { Link } from "react-router-dom";
import { AuthStore } from "../User/stores/AuthStore";
import { observer } from 'mobx-react';

interface NavigationProps {
    authStore: AuthStore;
}

export const Navigation: React.FC<NavigationProps> = observer(({ authStore }) => {
    const user = authStore?.user;
    const isAuthenticated = authStore?.isAuthenticated;

    return (
        <nav className='site-nav'>
            {authStore.user.isCompany && <Link to="/create" className='button nav-btn'>Add Listing</Link>}
            <Link to="/" className='button nav-btn'>Listings</Link>
            {isAuthenticated ?
                <>
                    <button onClick={authStore.logout} className='button nav-btn'>Logout</button>
                    <div className="logo-container">
                        <img className="logo-img"
                            src={user?.logo || '/path/to/default-logo.png'}
                            alt="User Logo"
                            onError={(e) => (e.target as HTMLImageElement).src = '../../../images/default-logo.png'} />
                    </div>
                </>
                :
                <>
                    <Link to="/login" className='button nav-btn'>Login</Link>
                    <Link to="/register" className='button nav-btn'>Register</Link></>
            }

        </nav>
    );
});


