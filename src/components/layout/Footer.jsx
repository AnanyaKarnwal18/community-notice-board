import "./Footer.css";
import { FaGoogle, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      {/* Newsletter Card */}
  <div className="newsletter-wrapper">
    <div className="newsletter-card">
      <h3>Subscribe to our newsletter</h3>
      <p>
        Get latest updates, events, and announcements directly in your inbox.
      </p>
      <div className="newsletter-input">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>

      {/* Main Footer */}
      <div className="footer-container">

        <div className="footer-brand">
          <h2>NoticeX</h2>
          <p>
            A modern community notice board platform that connects
            people through seamless announcements and updates.
          </p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Events</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

   <div className="footer-links">
  <h4>Contact</h4>
  <ul>
    <li>+91 9876543210</li>
    <li>support@noticex.com</li>
    <li>India</li>
  </ul>

  <div className="social-icons">
    <FaGoogle />
    <FaGithub />
    <FaLinkedin />
    <FaXTwitter />
  </div>
</div>


      </div>

      <div className="footer-bottom">
        © 2025 NoticeX. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;