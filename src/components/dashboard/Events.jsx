import "./Dashboard.css";

function Events() {
  return (
    <div className="event-section">
      <div className="event-topbar">
        <h2>Upcoming Events</h2>
        <div className="event-actions">
          <span className="event-chip">Next 7 Days</span>
          <button className="ghost-btn">View All</button>
        </div>
      </div>

      <div className="event-grid">
        <div className="event-feature-card">
          <div className="event-date-box">
            <h1>30</h1>
            <span>JUN</span>
          </div>

          <div className="event-content">
            <h3>Blood Donation Camp</h3>
            <p>Community Hall · 10:00 AM</p>

            <div className="event-meta">
              <span>120 Expected</span>
              <span>Health Drive</span>
            </div>
          </div>

          <button className="primary-mini">Join</button>
        </div>

        <div className="event-feature-card soft">
          <div className="event-date-box alt">
            <h1>05</h1>
            <span>JUL</span>
          </div>

          <div className="event-content">
            <h3>Startup Pitch Evening</h3>
            <p>Auditorium · 04:00 PM</p>

            <div className="event-meta">
              <span>Entrepreneurship</span>
              <span>Limited Seats</span>
            </div>
          </div>

          <button className="primary-mini">RSVP</button>
        </div>
      </div>
    </div>
  );
}

export default Events;