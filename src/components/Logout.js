import React from 'react';

const LogoutForm = ({ handleLogout }) => {
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <form onSubmit={handleLogoutClick}>
        <p>Are you sure you want to log out?</p>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default LogoutForm;
