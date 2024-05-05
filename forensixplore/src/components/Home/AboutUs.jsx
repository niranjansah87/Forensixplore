

const AboutUs = () => {
  return (
    <section className="ab_one section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="ab_img">
              <img src="assets/img/about1.png" className="img-fluid" alt="image" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
            <div className="ab_content">
                <span>About our Club</span>
                <h2>What You&apos;ll Learn in Our Club</h2>
            </div>
            <div className="abmv">
                <h4><img src="assets/img/check.png" alt="" /> Cybersecurity Fundamentals</h4>
                <p>You&apos;ll gain a solid understanding of the foundational concepts and principles of cybersecurity, including risk management, threat intelligence, cryptography, and network security.</p>
            </div>
            <div className="abmv">
                <h4><img src="assets/img/check.png" alt="" /> Security Tools and Technologies</h4>
                <p>You&apos;ll become familiar with various cybersecurity tools and technologies used to detect, prevent, and respond to cyber threats</p>
            </div>
            <div className="abmv">
                <h4><img src="assets/img/check.png" alt="" /> Security Awareness and Education</h4>
                <p>You&apos;ll learn the importance of security awareness and education in promoting a culture of cybersecurity within</p>
            </div>
            <div className="abmv">
                <h4><img src="assets/img/check.png" alt="" /> Real-World Case Studies and Scenarios</h4>
                <p>You&apos;ll have the opportunity to analyze real-world cybersecurity incidents, case studies, and scenarios to gain cybersecurity challenges and solutions</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="sk_img">
              <img src="assets/img/computer.png" className="img-fluid" alt="image" style={{ marginTop: '-390px', marginLeft: '0px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
