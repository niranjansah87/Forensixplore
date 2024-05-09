import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/event.css'; // Import CSS file
import Navbar from './Navbar';
import Footer from './Footor';

function Future_Events() {
  const [futureEvents, setFutureEvents] = useState([]);

  useEffect(() => {
    const fetchFutureEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5001/fevent/getfutureevents');
        setFutureEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFutureEvents();
  }, []);

  return (
    <>
      <Navbar />
      <section className="section-top">
        <div className="container2">
          <div className="col-lg-10 offset-lg-1 text-center">
            <div className="section-top-title wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0" >
              <h1>Future Events</h1>
              <ul>
                <li><a href="/">Home</a></li>
                <li> / Future Events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="content-wrapper">
        {futureEvents.length === 0 ? (
          <h1 className="no-events-message">Stay tuned for Upcoming Events</h1>
        ) : (
          futureEvents.map((event) => (
            <div className="news-card" key={event._id}>
              <a href={event.registrationLink} className="news-card__card-link"></a>
              <img src={event.eventPoster} alt="" className="news-card__image" />
              <div className="news-card__text-wrapper">
                <h2 className="news-card__title">{event.title}</h2>
                <div className="news-card__post-date">{event.date.slice(0, 10)}</div>
                <div className="news-card__catagory">{event.category}</div>
                <div className="news-card__details-wrapper">
                  <p className="news-card__excerpt">{event.description}</p>
                  <a href={event.registrationLink} className="news-card__read-more">
                    Register 
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Future_Events;
