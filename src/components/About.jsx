import Navbar from './Navbar';
import Footer from './Footor';
import section2 from '../assets/img/bg/section-2.jpg'
import csa from '../assets/img/csa.png'
const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>

        {/* SECTION TOP */}
        <section className="section-top">
          <div className="container">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div className="section-top-title wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                <h1>About</h1>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li> / About</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* END SECTION TOP */}

        {/* START CHOOSE */}
        <section className="why_area section-padding" style={{ backgroundImage: `url(${section2})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                <div className="ab_content">
                  <h2>What is Forensixplore Club?</h2>
                  <p>Forensixplore is a cybersecurity club dedicated to the exploration and investigation of digital forensics. It&apos;s a dynamic and engaging community where individuals with a passion for cybersecurity come together to delve into the fascinating world of forensic exploration.</p>
                  <br /><br />
                  <p>Our Club provides a platform for members to enhance their knowledge, skills, and expertise in digital forensics through workshops, training sessions, competitions, and collaborative projects. It&apos;s a community-driven initiative focused on empowering individuals to explore the forefront of cybersecurity through forensic investigation and discovery.</p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="sk_img">
                  <img src={csa} className="img-fluid" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END CHOOSE */}

        <section className="ab_one section-padding" style={{ marginBottom: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="ab_img">
                  <img src="assets/img/about2.png" className="img-fluid" alt="image" style={{ marginTop: "90px" }} />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                <div className="ab_content">
                  <span>About Club</span>
                  <h2>What is our mission?</h2>
                  <div className="abmv">
                    <h4><img src="assets/img/check.png" alt="" /> Educate</h4>
                    <p> Provide comprehensive education and training to equip members with the latest cybersecurity techniques, tools, and best practices.</p>
                  </div>
                  <div className="abmv">
                    <h4><img src="assets/img/check.png" alt="" /> Collaborate</h4>
                    <p>Foster a collaborative environment where members can share knowledge, resources, and experiences to collectively enhance cybersecurity expertise.</p>
                  </div>
                  <div className="abmv">
                    <h4><img src="assets/img/check.png" alt="" /> Ethical Conduct</h4>
                    <p> Advocate for ethical hacking practices and responsible use of cybersecurity skills, emphasizing integrity, professionalism, and respect for privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* START BLOG */}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="section-title text-center">
              <h2>What we have Achieved ?</h2>
            </div>
          </div>
        </section>
        {/* END BLOG */}



        {/* START COUNTER */}
        <section className="count_area counter_feature">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                <div className="single-project3">
                  <h2 className="counter-num">10+</h2>
                  <h4>Number of Mentors</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                <div className="single-project3">
                  <h2 className="counter-num">40+</h2>
                  <h4>Events Conducted</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                <div className="single-project3">
                  <h2 className="counter-num">500+</h2>
                  <h4>Our Club Member</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                <div className="single-project3">
                  <h2 className="counter-num">10+</h2>
                  <h4>Project Completed</h4>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="count_area counter_feature" style={{ marginTop: '-60px' }}>
          <div className="container">
            <div className="row text-center">

              <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                <div className="single-project3">
                  <h2 className="counter-num">20+</h2>
                  <h4>CEH Certified</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                <div className="single-project3">
                  <h2 className="counter-num">20+</h2>
                  <h4>AWS CP Certified</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                <div className="single-project3">
                  <h2 className="counter-num">100+</h2>
                  <h4>AZ-900 Certified</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                <div className="single-project3">
                  <h2 className="counter-num">2+</h2>
                  <h4>e-JPT Certified</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* END COUNTER */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
