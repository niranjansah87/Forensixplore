// Import useState and useNavigate
import  { useState } from 'react';
import { Link  } from 'react-router-dom';

import logo from './assets/images/forensixplore.png';
import avtar from './assets/images/Anonymous_Hacker.png';

const AdminNavbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

  

    return (
        <nav className="navh" style={{ backgroundColor: '#14192d' }}>
            <div className="containerdiv nav__container">
                <Link to="/" className="nav__logo"><img className="navv_logo" src={logo} alt="logo" /></Link>
                <ul className={`nav__items ${isNavOpen ? 'open' : ''}`}>
                    <li><Link to="/admin">Dashboard</Link></li>
                    <li><Link to="/">View Site</Link></li>
                    <li>Welcome Admin</li>
                    <li className="nav__profile" onClick={toggleNav}>
                        <div className="avatar">
                            <img className="pavtar" src={avtar} alt="avatar" />
                        </div>
                        <ul>
                            <li><Link to="/dashboard">Profile</Link></li>
                            <li><Link >Logout</Link></li>
                        </ul>
                    </li>
                </ul>

                <button id="open__nav-btn" onClick={toggleNav}><i className="uil uil-bars"></i></button>
                <button id="close__nav-btn" onClick={toggleNav}><i className="uil uil-multiply"></i></button>
            </div>
        </nav>
    );
};

export default AdminNavbar;
