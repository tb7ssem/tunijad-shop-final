import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  // Hook to access authentication context
  const { currentUser, logout } = useAuth();

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  // Render the header component
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        {isAuthenticated && (
          <Link to="/admin/dashboard" className="nav-link">Admin Dashboard</Link>
        )}
      </nav>
      <button onClick={handleAuthAction} className="auth-button">
        {isAuthenticated ? 'Logout' : 'Admin Login'}
      </button>
    </header>
  );
};

export default Header;