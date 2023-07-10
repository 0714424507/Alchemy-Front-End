import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = ({ isLoggedIn, handleLogout, cartItemsCount }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Signup">Signup</NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <span>Welcome, User!</span>
            <button onClick={handleLogoutClick}>Logout</button>
          </>
        )}
        <NavLink to="/Items">Items</NavLink>
        <NavLink to="/Cart">Cart ({cartItemsCount})</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
