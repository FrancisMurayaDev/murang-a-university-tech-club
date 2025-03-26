import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h2 className="nav-title">
        <span>MUT</span>C
      </h2>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/leadership" onClick={toggleMenu}>
            Leadership
          </Link>
        </li>
        <li>
          <Link to="/tracks" onClick={toggleMenu}>
            Tracks
          </Link>
        </li>
        <li>
          <Link to="/events" onClick={toggleMenu}>
            Events
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
