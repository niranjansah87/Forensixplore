
import logo from '../assets/img/forensixplore.png';

const Navbar = () => {
  return (
    <div id="navigation" className="navbar-light bg-faded site-navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-20 align-self-center">
            <div className="site-logo">
              <a href="/"><img src={logo} alt="Forensixplore" /></a>
            </div>
          </div>
          <div className="col-60 d-flex justify-content-center">
            <nav id="main-menu">
              <ul>
                <li className="menu-item-has-children"><a href="/">Home</a></li>
                <li className="menu-item-has-children"><a href="/">About</a></li>
                <li className="menu-item-has-children">
                  <a href="/">Events</a>
                  <ul>
                    <li><a href="/">Past Events</a></li>
                    <li><a href="/">Upcoming Events</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children"><a href="/">Team</a></li>
                <li className="menu-item-has-children"><a href="/">Blog</a></li>
              </ul>
            </nav>
          </div>
          <ul className="mobile_menu">
            <li className="menu-item-has-children"><a href="/">Home</a></li>
            <li className="menu-item-has-children"><a href="/">About</a></li>
            <li className="menu-item-has-children">
              <a href="/">Events</a>
              <ul>
                <li><a href="/">Past Events</a></li>
                <li><a href="/">Upcoming Events</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children"><a href="/">Team</a></li>
            <li className="menu-item-has-children"><a href="/">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
