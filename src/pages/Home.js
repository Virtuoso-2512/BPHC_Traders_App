import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';
import { get } from '../controllers/requests';

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    get("events").then(res => setEvents(res.events));
  }, []);

  const upcomingEvents = events.filter(e => new Date(e.start) > new Date());

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-badge">Traders @ BPHC Official Club</div>
          <h1 style={{ fontFamily:"Poppins"}}>Master the Markets. <span>Build Wealth.</span></h1>
          <p>
            The premier financial and algorithmic trading community at BITS Pilani, Hyderabad Campus. 
            We bridge theory and practice through quantitative analysis, live tracking, and collaborative trading simulations.
          </p>
          <div className="hero-buttons">
            <Link to="/events" className="btn-primary">Explore Events</Link>
            <Link to="/about-us" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="about-summary">
        <div className="container">
          <h2 className="section-title" style={{ fontFamily:"Poppins"}}>What We Do</h2>
          <div className="about-grid">
            <div className="feature-card">
              <h3>📊 Quantitative Analysis</h3>
              <p>Dive deep into historical market datasets, data crunching, and indicator tracking using tools like Python and Excel.</p>
            </div>
            <div className="feature-card">
              <h3>🚀 Live Simulations</h3>
              <p>Test real-world risk management strategies and trading psychology through high-stakes mock portfolio competitions.</p>
            </div>
            <div className="feature-card">
              <h3>💡 Expert Workshops</h3>
              <p>Learn options mechanics, macro-economics, and fundamental equity research directly from seasoned campus peers and alumni.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="announcements">
        <div className="container">
          <h2 className="section-title" style={{ fontFamily:"Poppins"}}>Featured Announcements</h2>
          <div>
            {upcomingEvents.map((item,idx) => (
              <div key={idx} className="announcement-card">
                <div>
                  <div className="announcement-date">Start: {new Date(item.start).toLocaleString()}</div>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>{item.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.description}</p>
                </div>
                <Link to="/events" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h2>Traders @ BPHC</h2>
          <p>Empowering the next generation of financial minds.</p>
          <div className="social-links">
            <span>Instagram</span> | <span>Twitter</span> | <span>Email</span>
          </div>
        </div>
      </footer>
    </div>
  );
}