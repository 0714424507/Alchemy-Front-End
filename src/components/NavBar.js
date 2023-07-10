import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cartItemsCount, isLoggedIn, handleLogout }) {
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <h2 className='top'>A L C H E M Y</h2>
        <h2 className='bottom'>A L C H E M Y</h2>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/Wishlist">Wishlist</Link>
            </li>
            <li>
              <button onClick={handleLogoutClick}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/Items">Shop</Link>
        </li>
        <li>
          <Link to="/Cart">Cart ({cartItemsCount})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
