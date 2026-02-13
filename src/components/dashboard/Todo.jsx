import { useState } from "react";
import "./Dashboard.css";

function Todo() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Optimize server response time",
      due: "09:00 AM",
      done: false,
    },
    {
      id: 2,
      title: "Ensure responsive UI design",
      due: "10:00 AM",
      done: false,
    },
  ]);

  const toggle = (id) => {
    setItems((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="workspace-panel">
      <div className="workspace-header">
        <h3>Daily Tasks</h3>
        <span className="workspace-count">{items.length}</span>
      </div>

      <div className="workspace-list">
        {items.map((task) => (
          <div
            key={task.id}
            className={`workspace-row ${task.done ? "row-done" : ""}`}
          >
            <div className="row-info">
              <p>{task.title}</p>
              <small>{task.due}</small>
            </div>

            <button
              className={`row-toggle ${task.done ? "active-toggle" : ""}`}
              onClick={() => toggle(task.id)}
            >
              {task.done ? "Completed" : "Mark"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;