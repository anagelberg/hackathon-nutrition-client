import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {

    const location = useLocation();
    return (
        <nav className="nav-bar">
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
                <div className="nav-item">Daily Data</div>
            </Link>
            <Link to="/entry" className={location.pathname === '/entry' ? 'active-link' : ''}>
                <div className="nav-item">Enter Meals</div></Link>
            <Link to="/options" className={location.pathname === '/options' ? 'active-link' : ''}>
                <div className="nav-item">Settings</div></Link>
        </nav>
    );
};

export default Navigation;




