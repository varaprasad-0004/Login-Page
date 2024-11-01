import React from 'react';
import './LandingPage.css'; // Include the CSS for styling

export default function LandingPage({ username }) {
  return (
    <div className="landing-container">
      <h1>Welcome, {username}!</h1>
      <p>You've successfully logged in. Enjoy!</p>
    </div>
  );
}
