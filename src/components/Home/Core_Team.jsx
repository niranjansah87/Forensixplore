import mithun from './img/team/Midhun sai Kothagundla.jpg'
import khaja from './img/team/khaja.png'
import sumanth from './img/team/sumanth.jpg'
import niranjan from './img/team/niranjan.png'
import { Link } from 'react-router-dom';
const Team = () => {
  return (
    <section className="team_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="section-title">
              <span>Our team member</span>
              <h2>Meet our Dedicated Team members</h2>
              <p>Welcome to the Forensixplore Club, where cybersecurity and innovation unite! Our diverse team is dedicated to ethical hacking and safeguarding digital realms through collaboration and expertise. Join us in shaping a safer online world.</p>
              {/* <a href="" className="btn_one">View all members <i className="ti-arrow-top-right"></i></a> */}
              <Link to="/team" className="btn_one">View all members <i className="ti-arrow-top-right"></i></Link>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="single_team">
                  <img src={mithun} className="img-fluid2" alt="image" />
                  <h4>K Midhun Sai</h4>
                  <p>President</p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="single_team">
                  <img src={khaja} className="img-fluid2" alt="image" />
                  <h4>M Khaja Shaik</h4>
                  <p>Director</p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="single_team">
                  <img src={sumanth} className="img-fluid2" alt="image" />
                  <h4>Sumanth Dhruva</h4>
                  <p>Secretary</p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="single_team">
                  <img src={niranjan} className="img-fluid2" alt="image" />
                  <h4>Niranjan sah</h4>
                  <p>Administrator Head</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
