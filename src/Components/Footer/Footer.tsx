import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/tracks">Tracks</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="foot-contact">Contact Us</h3>
          <p className="foot-detail">Email: info@mutc.com</p>
          <p className="foot-detail">Phone: +254 712 345 678</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Made by <span className="author">FrancisMurayaDev</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
