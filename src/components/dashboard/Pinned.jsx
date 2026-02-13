import "./Dashboard.css";

function Pinned() {
  return (
    <div className="notice-section">
      <div className="notice-topbar">
        <h2>Pinned Notices</h2>
        <div className="notice-actions">
          <span className="notice-chip">2 Active</span>
          <button className="ghost-btn">Manage</button>
        </div>
      </div>

      <div className="notice-list">
        <div className="notice-card">
          <div className="notice-dot"></div>

          <div className="notice-content">
            <h4>Water supply cut-off on June 28</h4>
            <p>Maintenance Notice · 8:00 AM - 3:00 PM</p>
            <span className="notice-tag warning">Utility</span>
          </div>

          <button className="icon-btn">⋯</button>
        </div>

        <div className="notice-card">
          <div className="notice-dot"></div>

          <div className="notice-content">
            <h4>PTA Meeting Friday 4 PM</h4>
            <p>Community Update · Conference Room</p>
            <span className="notice-tag info">Meeting</span>
          </div>

          <button className="icon-btn">⋯</button>
        </div>
      </div>
    </div>
  );
}

export default Pinned;