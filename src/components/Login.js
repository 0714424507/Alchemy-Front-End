import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make API request to the backend for user login
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        // Handle successful login response
        // Redirect to another page, e.g., dashboard
        navigate('/dashboard');
        console.log(response);
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginFormContainer">
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="loginInput"
          required
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="loginInput"
          required
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;