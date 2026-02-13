import "./Dashboard.css";

function TaskStatus() {
  return (
    <div className="analytics-panel">
      <h3>Task Overview</h3>

      <div className="analytics-grid">
        <div className="metric-box">
          <h2>64</h2>
          <span>Total Projects</span>
        </div>

        <div className="metric-box">
          <h2>14</h2>
          <span>Ongoing</span>
        </div>

        <div className="metric-box">
          <h2>4</h2>
          <span>In Progress</span>
        </div>

        <div className="metric-box highlight-box">
          <h2>46</h2>
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TaskStatus;