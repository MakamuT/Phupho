import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function Home() {
  return (
    <div>
      <h1>Welcome to the Peer-to-Peer Learning Platform</h1>
      <p>Select a page to navigate:</p>

      {/* Navigation links */}
      <ul>
        <li>
          <Link to="/learning-pathways">View Learning Pathways</Link>
        </li>
        <li>
          <Link to="/progress-dashboard">Your Progress Dashboard</Link>
        </li>
        <li>
          <Link to="/rewards-badges">Rewards and Badges</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
