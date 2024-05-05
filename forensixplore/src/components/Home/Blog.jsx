
import p1 from '../assets/img/blog/1.jpg';
import p2 from '../assets/img/blog/2.jpg';
import p3 from '../assets/img/blog/3.jpg';

const Blog = () => {
  return (
    <section className="blog_area section-padding">
      <div className="container">													
        <div className="section-title text-center">
          <span>Blog & News</span>
          <h2>See our latest blog and <br />news from us</h2>
        </div>
        <div className="row">								
          <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="single_blog">
              <img src={p1} className="img-fluid" alt="image" />
              <span><a href="/">Security</a></span>	
              <span>February 15, 2024</span>	
              <h3><a href="/">How can you improvement to your business policy for the better product.</a></h3>
              <a href="/" className="blog_btn">View Details <i className="ti-arrow-top-right"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="single_blog">
              <img src={p2} className="img-fluid" alt="image" />
              <span><a href="/">Security</a></span>	
              <span>February 15, 2024</span>	
              <h3><a href="/">people poputation change anything what your need for your next generation.</a></h3>
              <a href="/" className="blog_btn">View Details <i className="ti-arrow-top-right"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
            <div className="single_blog">
              <img src={p3} className="img-fluid" alt="image" />
              <span><a href="/">Security</a></span>	
              <span>February 15, 2024</span>	
              <h3><a href="/">Improve your business so that you can stay in your local business in next month.</a></h3>
              <a href="/" className="blog_btn">View Details <i className="ti-arrow-top-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
