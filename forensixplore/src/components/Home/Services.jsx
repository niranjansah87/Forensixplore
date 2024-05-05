

const Services = () => {
  return (
    <section className="service_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="section-title">
              <span>Our services</span>
              <h2>What we do for our <br />Club Members</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="single_service">
              <img src="assets/img/portfolio/service 1.jpg" className="img-fluid3" alt="image" />
              <h2>Workshops and Training</h2>
              <p>Hands-on sessions covering topics like digital forensics tools, methodologies, and case studies</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="single_service">
              <img src="assets/img/portfolio/service 2.jpg" className="img-fluid3" alt="image" />
              <h2>Cybersecurity Competitions</h2>
              <p>Participation in hacking competitions, capture the flag (CTF) events, and forensic challenges</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="single_service">
              <img src="assets/img/portfolio/service 3.jpg" className="img-fluid3" alt="image" />
              <h2>Community Engagement</h2>
              <p>Engaging with the broader cybersecurity community through outreach activities, awareness campaigns, and knowledge sharing initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
