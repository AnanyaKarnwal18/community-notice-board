


import { useEffect, useState } from "react";
import "./Dashboard.css";

function LatestUpdates() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=20")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle articles randomly
        const shuffled = data.results.sort(() => 0.5 - Math.random());
        // Take first 3
        setArticles(shuffled.slice(0, 3));
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  return (
    <div>
      <h2 className="section-title">Latest Updates</h2>

      <div className="news-container">
        {articles.map((article) => (
          <div key={article.id} className="news-card">
            <img src={article.image_url} alt="news" />
            <h3>{article.title}</h3>
            <p>{article.summary.slice(0, 120)}...</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <button>Know more</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestUpdates;