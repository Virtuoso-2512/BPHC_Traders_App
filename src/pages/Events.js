import {useEffect, useState} from "react";
import { get } from "../controllers/requests";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    get("events").then(res => setEvents(res.events));
  }, []);
  
  const handleRegistration = (eventName) => {
    window.alert(`[Test] Successfully registered placeholder for: ${eventName}! We will email you further updates.`);
  };

  const upcomingEvents = events.filter(e => new Date(e.start) > new Date());
  const pastEvents = events.filter(e => new Date(e.start) <= new Date());

  return (
    <div className="container events" style={{ padding: '60px 20px' }}>
      
      {/* Header */}
      <div className="events-hero">
        <h1>Club Events & Workshops</h1>
        <p>Explore our upcoming sessions or check out what we've previously hosted on campus.</p>
      </div>

      {/* Upcoming Events Section */}
      <h2 className="events-filter-title">Upcoming Events</h2>
      <div className="grid">
        {upcomingEvents.map((event,idx) => (
          <div key={idx} className="card">
            <img src={event.poster} alt={event.name} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
            <div className="card-content">
              <div className="card-header">
                <h3 style={{ fontSize: '1.25rem', color: '#fff', fontFamily:"Poppins"}}>{event.name}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '15px' }}>{event.description}</p>
              
              <div className="event-details">
                <p>📅 Start Time: {new Date(event.start).toLocaleString()}</p>
                <p>⏰ End Time: {new Date(event.end).toLocaleString()}</p>
                <p>📍 Location: {event.venue}</p>
              </div>

              <button 
                className="btn-primary" 
                onClick={() => handleRegistration(event.name)}
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="events-filter-title" style={{ marginTop: '60px' }}>Past Events</h2>
      <div className="grid">
        {pastEvents.map((event,idx) => (
          <div key={idx} className="card" style={{ opacity: 0.85 }}>
            <img src={event.poster} alt={event.name} style={{ height: '200px', width: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
            <div className="card-content">
              <div className="card-header">
                <h3 style={{ fontSize: '1.25rem', color: '#fff', fontFamily:"Poppins" }}>{event.name}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '15px' }}>{event.description}</p>
              
              <div className="event-details">
                <p>📅 Start Time: {new Date(event.start).toLocaleString()}</p>
                <p>⏰ End Time: {new Date(event.end).toLocaleString()}</p>
                <p>📍 Location: {event.venue}</p>
              </div>

              <button 
                className="btn-secondary" 
                style={{ width: '100%', padding: '12px', marginTop: '10px', textAlign: 'center', cursor: 'not-allowed', opacity: 0.6 }}
                disabled
              >
                Event Concluded
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}