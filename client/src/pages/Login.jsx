import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:2727/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userInfo', JSON.stringify(data.user));

      const decoded = jwtDecode(data.token);
      const isAdmin = decoded.isAdmin;

      setWelcomeMessage(`Welcome back, ${isAdmin ? 'Admin' : 'User'}!`);

      setTimeout(() => {
        navigate('/add-pet');
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      {welcomeMessage && <div className="welcome-banner">{welcomeMessage}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to Pawsh Inc.</h2>
        {error && <p className="error-message">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-dark w-100 mt-3">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;