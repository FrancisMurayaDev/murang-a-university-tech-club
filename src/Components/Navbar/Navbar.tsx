import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MUTECH</h2>
      <ul>
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
  )
}

export default Navbar
