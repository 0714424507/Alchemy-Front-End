import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';
function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
       <h1 class="header">Alchemy</h1>
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