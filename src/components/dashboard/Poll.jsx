import { useState } from "react";
import "./Dashboard.css";

function Poll() {
  const [voted, setVoted] = useState(false);
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 1, label: "Yes", votes: 72 },
    { id: 2, label: "No", votes: 28 },
  ];

  const totalVotes = options.reduce((acc, opt) => acc + opt.votes, 0);

  const handleVote = (id) => {
    setSelected(id);
    setVoted(true);
  };

  return (
    <div className="poll-hero">
      <div className="poll-header">
        <h2>Ongoing Poll</h2>
        <span className="poll-tag">Live</span>
      </div>

      <h3 className="poll-question">
        Should plastic bags be banned?
      </h3>

      <div className="poll-options">
        {options.map((option) => {
          const percentage = ((option.votes / totalVotes) * 100).toFixed(0);

          return (
            <div
              key={option.id}
              className={`poll-option ${
                selected === option.id ? "selected-option" : ""
              }`}
              onClick={() => !voted && handleVote(option.id)}
            >
              <span>{option.label}</span>

              {voted && (
                <div className="vote-bar-wrapper">
                  <div
                    className="vote-bar"
                    style={{ width: `${percentage}%` }}
                  />
                  <small>{percentage}%</small>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!voted && (
        <button
          className="poll-submit-btn"
          disabled={!selected}
        >
          Submit Vote
        </button>
      )}

      {voted && (
        <p className="vote-count">
          {totalVotes} votes recorded
        </p>
      )}
    </div>
  );
}

export default Poll;