import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';
function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <h2 className='top'>A L C H E M Y </h2>
      <h2 className='bottom'>A L C H E M Y</h2>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
        <li>
          <Link to="/Shop">Shop</Link>
        </li>
        <li>
        <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;