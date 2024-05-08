// import { Link } from 'react-router-dom'; // Import Link component

import logo from '../assets/img/forensixplore.png';




const Navbar = () => {
  return (
    <div id="navigation" className="navbar-light bg-faded site-navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-20 align-self-center">
            <div className="site-logo">
              <a href="index.html"><img src={logo} alt="" /></a>
            </div>
          </div>
          <div className="col-60 d-flex justify-content-center">
            <nav id="main-menu">
              <ul>
                <li className="menu-item-has-children"><a href="./index.html">Home</a></li>
                <li className="menu-item-has-children"><a href="./about.html">About</a></li>
                <li className="menu-item-has-children-event">
                  <a href="#">Events</a>
                  <ul>
                    <li><a href="#">Past Events</a></li>
                    <li><a href="#">Upcoming Events</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children" style={{ marginLeft: '20px' }}><a href="./teamcard.html">Team</a></li>
                <li className="menu-item-has-children"><a href="#">Blog</a></li>
              </ul>
            </nav>
          </div>
          <ul className="mobile_menu">
            <ul>
              <li className="menu-item-has-children"><a href="./index.html">Home</a></li>
              <li className="menu-item-has-children"><a href="./about.html">About</a></li>
              <li className="menu-item-has-children-event">
                <a href="#">Events</a>
                <ul>
                  <li><a href="#" style={{ marginLeft: '20px' }}>Past Events</a></li>
                  <li><a href="#" style={{ marginLeft: '20px' }}>Upcoming Events</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children"><a href="./teamcard.html">Team</a></li>
              <li className="menu-item-has-children"><a href="#">Blog</a></li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;





// const Navbar = () => {
//   return (
//     <div id="navigation" className="navbar-light bg-faded site-navigation">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-20 align-self-center">
//             <div className="site-logo">
//               {/* Use Link instead of anchor tag */}
//               <Link to="/"><img src={logo} alt="Forensixplore" /></Link>
//             </div>
//           </div>
//           <div className="col-60 d-flex justify-content-center">
//             <nav id="main-menu">
//               <ul>
//                 {/* Use Link for navigation */}
//                 <li className="menu-item-has-children"><Link to="/">Home</Link></li>
//                 <li className="menu-item-has-children"><Link to="/about">About</Link></li>
//                 <li className="menu-item-has-children">
//                   <Link to="/">Events</Link>
//                   <ul>
//                     <li><Link to="/">Past Events</Link></li>
//                     <li><Link to="/">Upcoming Events</Link></li>
//                   </ul>
//                 </li>
//                 <li className="menu-item-has-children"><Link to="/team">Team</Link></li>
//                 <li className="menu-item-has-children"><Link to="/blog">Blog</Link></li>
//               </ul>
//             </nav>
//           </div>
//           {/* Mobile Menu */}
//           <ul className="mobile_menu">
//             <li className="menu-item-has-children"><Link to="/">Home</Link></li>
//             <li className="menu-item-has-children"><Link to="/about">About</Link></li>
//             <li className="menu-item-has-children">
//               <Link to="/">Events</Link>
//               <ul>
//                 <li><Link to="/">Past Events</Link></li>
//                 <li><Link to="/">Upcoming Events</Link></li>
//               </ul>
//             </li>
//             <li className="menu-item-has-children"><Link to="/team">Team</Link></li>
//             <li className="menu-item-has-children"><Link to="/blog">Blog</Link></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
