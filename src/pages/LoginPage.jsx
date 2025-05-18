// src/pages/LoginPage.jsx
import React from 'react';
import Login from '../components/auth/Login.jsx';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login data:', credentials);
    // Add API call here
  };

  return (
    <div>
      <Login onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
