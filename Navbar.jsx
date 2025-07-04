import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { auth, logout } = useAuth();

  // Debug: Check if user is detected
  console.log("Auth State in Navbar:", auth);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">MasterG</Link>

        <div className="search-container">
          <input type="text" placeholder="Search classroom" className="search-input" />
          {/* Search icon */}
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M16.65 16.65A7 7 0 1 0 5 5a7 7 0 0 0 11.65 11.65Z" />
          </svg>
        </div>
      </div>

      <div className="navbar-right">
        {auth?.user ? (
          <>
            <Link to="/profile" className="profile-icon" title="Profile">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 18c0-2.21 3.58-4 6-4s6 1.79 6 4v1H6v-1z" />
              </svg>
            </Link>

            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
