import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Assume the provided CSS is saved here

export default function LoginPaze() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/register', formData);
      alert('Registration successful');
    } catch (error) {
      alert('Registration failed');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response.data.message === 'Login successful') {
        if (formData.username === 'admin') {
          window.location.href = '/admin';
        } else {
          window.location.href = `/land?username=${formData.username}`;
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  const flipCard = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className={`container ${isLoginForm ? '' : 'right-panel-active'}`} id="container">
      {/* Sign-Up Form */}
      <div className="form-container sign-up-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Create Account</h1><br></br>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          /><br></br>
          <button type="button" onClick={handleRegister}>Sign Up</button>
        </form>
      </div>

      {/* Sign-In Form */}
      <div className="form-container sign-in-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Sign in</h1><br></br>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          /><br></br>
          <button type="button" onClick={handleLogin}>Sign In</button>
        </form>
      </div>

      {/* Overlay Section */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={flipCard}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" id="signUp" onClick={flipCard}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
