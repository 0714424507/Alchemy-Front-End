import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_Number] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Make API request to the backend for user sign-up
      const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          phone_number,
          password,
        }),
      });
      if (response.ok) {
        // Handle successful sign-up response
        // Redirect to another page, e.g., dashboard
        navigate('/Home');
        console.log(response);
      } else {
        console.log('Sign-up failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signupFormContainer">
      <h1>Hello</h1>
      <form className="signupForm" onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <label htmlFor="username">
          Username <span>*</span>
        </label>
        <input
          type="text"
          id="username"
          className="signupInput"
          required
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="email"
          id="email"
          className="signupInput"
          required
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone_number">
          Phone Number <span>*</span>
        </label>
        <input
          type="text"
          id="phone_number"
          className="signupInput"
          required
          placeholder="Enter phone number"
          value={phone_number}
          onChange={(e) => setPhone_Number(e.target.value)}
        />
        <label htmlFor="password">
          Password <span>*</span>
        </label>
        <input
          type="password"
          id="password"
          className="signupInput"
          required
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="signupButton">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
