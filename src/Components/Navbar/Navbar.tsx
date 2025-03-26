import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h2 className="nav-title">
          <span>MUT</span>C
        </h2>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leadership">Leadership</Link>
          </li>
          <li>
            <Link to="/tracks">Tracks</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
      <div className="bottom-div">
        <h3 className="bottom-head">Murang'a University Tech Club</h3>
        <ul className="socials">
          <li>
            <a className="social" href="#">
              <CiFacebook />
            </a>
          </li>
          <li>
            <a className="social" href="#">
              <CiTwitter />
            </a>
          </li>
          <li>
            <a className="social" href="#">
              <CiLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
