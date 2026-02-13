import "./Navbar.css";

function Navbar({ onPostClick }) {
  return (
    <header className="header">
      <div className="logo">
        Notice<span>X</span>
      </div>

<nav className="nav-links">
  <ul className="nav-list">
    <li><a href="#latest-updates">Latest Updates</a></li>
    <li><a href="#notices">Notices</a></li>
    <li><a href="#events">Events</a></li>
    <li><a href="#polls">Polls</a></li>
    <li><a href="#tasks">Tasks</a></li>
    <li><a href="#weather">Weather</a></li>
  </ul>
</nav>


      <button className="post-btn" onClick={onPostClick}>
        Post New Notice
      </button>
    </header>
  );
}

export default Navbar;