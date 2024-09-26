import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component to wrap the app and provide authentication context
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to sign up a new user
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // Function to log in an existing user
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // Function to log out the current user
  function logout() {
    return auth.signOut();
  }

  // Effect to listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Create the value object to be provided by the context
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  // Render the provider with the context value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
