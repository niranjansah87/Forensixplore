import  { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []); // Fetch blogs on component mount

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://forensixplore-backend-production.up.railway.app/blog/getblog');
      const shuffledBlogs = shuffleArray(response.data.slice(0, 3)); // Limit to 3 blogs and shuffle
      setBlogs(shuffledBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Function to shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Function to slice date to display only YYYY-MM-DD format
  const sliceDate = (dateString) => {
    return dateString.split('T')[0];
  };

  return (
    <section className="blog_area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span>Blog & News</span>
          <h2>See our latest blog and <br />news from us</h2>
        </div>
        <div className="row">
          {blogs.map(blog => (
            <div key={blog._id} className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_blog">
                <img src={`https://forensixplore-backend-production.up.railway.app/${blog.blog_thumbnail}`} className="img-fluid" alt="Blog Thumbnail" />
                <span><a href="/">{blog.category}</a></span>
                <span>{sliceDate(blog.date)}</span>
                <h3><a href="/">{blog.title}</a></h3>
                <a href={blog.blog_link} className="blog_btn" target="_blank" rel="noopener noreferrer">View Details <i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
