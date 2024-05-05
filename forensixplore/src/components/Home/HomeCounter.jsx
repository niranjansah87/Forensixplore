
import homebg from './home-bg.jpg'
const HomeCounter = () => {
  return (
    <>
      {/* START HOME COUNTER */}
      <section className="home_bg hb_height" style={{ background: `url(${homebg})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="hero-text ht_top">
                <h1>Forensixplore</h1>
                <p>Forensixplore is a CyberSecurity Club of Department of CS&IT of KL University where curiosity meets investigation!. Our club is a dynamic and engaging community that delves into the fascinating world of forensic exploration and discovery. If you have an inquisitive mind and a passion for solving mysteries, this is the perfect club for you.</p>
              </div>
              <div className="home_btns">
                <a href="/" className="btn_one">Discover More</a>
                <a className="video-play" href="https://klu.chvinay.live/" target="_blank"><i className="ti-image"></i> <span className="video-title">College Tour</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END  HOME */}
      {/* START COUNTER */}
      <section className="count_area counter_feature">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
              <div className="single-project">
                <h2 className="counter-num">5</h2>
                <h4>Number of Mentors</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
              <div className="single-project">
                <h2 className="counter-num">40</h2>
                <h4>Events Conducted</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
              <div className="single-project">
                <h2 className="counter-num">484</h2>
                <h4>Our Club Members</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
              <div className="single-project">
                <h2 className="counter-num">10</h2>
                <h4>Project Completed</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END  HOME COUNTER */}
    </>
  );
}

export default HomeCounter;
