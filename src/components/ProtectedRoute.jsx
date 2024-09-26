// ProtectedRoute component

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Redirect to login if user is not authenticated, otherwise render children
  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;