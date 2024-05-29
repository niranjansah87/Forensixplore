import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footor';
import '../assets/css/blog.css'

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from backend API endpoint
    axios.get('https://forensixplore-backend.onrender.com/blog/getblog')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  // Function to slice the date to display only the date portion
  const sliceDate = (date) => {
    return date.slice(0, 10); // Get the first 10 characters (yyyy-mm-dd)
  }

  return (
    <>
      <Navbar />
      <section className="section-top">
        <div className="container2">
          <div className="col-lg-10 offset-lg-1 text-center">
            <div className="section-top-title wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0" >
              <h1>Latest Blog</h1>
              <ul>
                <li><a href="/">Home</a></li>
                <li> / Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="blog-container">
        <div className="card-header">
          <div className="card2">
          {blogs.length === 0 ? (
          <h1 className="no-events-message">Stay tuned for Blogs</h1>
        ) : (
            blogs.map(blog => (
              <div className="nft" key={blog._id}>
                <div className='main'>
                  <img className='tokenImage' src={`http://localhost:5001/${blog.blog_thumbnail}`} alt={blog.title} />
                  <h5 className="date2">{sliceDate(blog.date)}</h5>
                  <h5 className="catagory">{blog.category}</h5>
                  <h2 className="title">{blog.title}</h2>
                  <p className="description">{blog.description}</p>
                  <div className='tokenInfo'>
                    <div className="button-wrapper">
                      <a href={blog.blog_link} className="btn outline" target="_blank" rel="noopener noreferrer">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
