import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <div>
      <h2>Welcome, User!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
