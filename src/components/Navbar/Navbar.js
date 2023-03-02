import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">LAB - WikiCountries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
