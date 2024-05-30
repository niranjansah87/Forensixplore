import { Link } from 'react-router-dom'; // Import Link component

import logo from './Admin/assets/images/forensixplore.png';

const Navbar = () => {
  return (
    <div id="navigation" className="navbar-light bg-faded site-navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-20 align-self-center">
            <div className="site-logo">
              {/* Use Link instead of anchor tag */}
              <Link to="/"><img src={logo} alt="Forensixplore" /></Link>
            </div>
          </div>
          <div className="col-60 d-flex justify-content-center">
            <nav id="main-menu">
              <ul>
                {/* Use Link for navigation */}
                <li className="menu-item-has-children"><Link to="/">Home</Link></li>
                <li className="menu-item-has-children"><Link to="/about">About</Link></li>
                <li className="menu-item-has-children">
                  <Link to="/">Events</Link>
                  <ul>
                    <li><Link to="/past">Past Events</Link></li>
                    <li><Link to="/future">Upcoming Events</Link></li>
                  </ul>
                </li>
                <li className="menu-item-has-children"><Link to="/team">Team</Link></li>
                <li className="menu-item-has-children"><Link to="/blog">Blog</Link></li>
              </ul>
            </nav>
          </div>
          {/* Mobile Menu */}
          <ul className="mobile_menu">
            <li className="menu-item-has-children"><Link to="/">Home</Link></li>
            <li className="menu-item-has-children"><Link to="/about">About</Link></li>
            <li className="menu-item-has-children">
              <Link to="/">Events</Link>
              <ul>
                <li><Link to="/past">Past Events</Link></li>
                <li><Link to="/future">Upcoming Events</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children"><Link to="/team">Team</Link></li>
            <li className="menu-item-has-children"><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
