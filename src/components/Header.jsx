import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';
import logo from '../logo.svg';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate('/');
    } else {
      navigate('/admin/login');
    }
  };

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