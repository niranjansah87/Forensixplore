// import '../index.css';
import { Link } from 'react-router-dom';
import logo from '../assets/img/forensixplore.png';
import section2 from '../assets/img/bg/section-2.jpg';

const Footer = () => {
  return (
    <div className="footer section-padding" style={{ backgroundImage: `url(${section2})`, objectFit: "contain", backgroundSize: "cover", backgroundPosition: "center center", padding: "10px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <Link to="/"><img src={logo} alt="club logo" style={{ marginLeft: "-10px" }} /> </Link>
              <p>Forensixplore&apos;s goal is to foster a community of cybersecurity enthusiasts skilled in forensic exploration, promoting ethical problem-solving in the digital realm.</p>
              <div className="social_profile">
                <ul>
                  <li><a href="https://www.facebook.com/kl.csit/" className="f_facebook"><i className="ti-facebook" title="Facebook"></i></a></li>
                  <li><a href="https://twitter.com/kl.csit" className="f_twitter"><i className="ti-twitter" title="Twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/kl.forensixplore/" className="f_instagram"><i className="ti-instagram" title="Instagram"></i></a></li>
                  <li><a href="#" className="f_linkedin"><i className="ti-linkedin" title="LinkedIn"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer3" style={{ marginTop: "50px", marginLeft: "80px" }}>
              <h4>About Club</h4>
              <ul>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/past">Past Events</Link></li>
                <li><Link to="/future">Future Events</Link></li>
                <li><Link to="/blog">Blog & news</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/">Asked Question</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12" style={{ marginTop: "50px", marginLeft: "20px" }}>
            <div className="single_footer">
              <h4>Our services</h4>
              <ul>
                <li><a href="#">Workshops and Training</a></li>
                <li><a href="#">Cybersecurity Competitions</a></li>
                <li><a href="#">Guest Speaker Series</a></li>
                <li><a href="#">Project Collaborations</a></li>
                <li><a href="#">Mentorship Program</a></li>
                <li><a href="#">Community Engagement</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12" style={{ marginTop: "50px", marginLeft: "-20px" }}>
            <div className="single_footer2">
              <h4>Get in Touch</h4>
              <ul>
                <li style={{ color: "rgb(12, 185, 233)" }}><b>Location:</b></li>
                <h6> R & D Block,R 202, Department of CSIT, KL University, Vijayawada</h6>
              </ul>
              <ul>
                <li style={{ color: "rgb(12, 185, 233)" }}><b>Email:</b></li>
                <h6><a href="mailto:forensixplore@kluniversity.in" style={{ color: "rgb(255, 255, 255)" }}>forensixplore@kluniversity.in</a></h6>
              </ul>
            </div>
          </div>
        </div>
        <div className="row fc justify-content-center">
          <div className="col-lg-6 col-sm-6 col-xs-12" style={{ marginTop: "-30px" }}>
            <div className="footer_copyright ">
              <p>© 2024 <a href="https://niranjansah87.com.np/" target="_blank" style={{ color: "red" }}>Niranjan sah</a> | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
