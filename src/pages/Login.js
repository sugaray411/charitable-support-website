import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // In a real application, you would validate credentials against a backend
    // For demo purposes, we'll just simulate a successful login
    const userData = {
      name: 'John Doe', // This would come from your backend
      email: formData.email
    };
    localStorage.setItem('user', JSON.stringify(userData));
    history.push('/');
  };

  return (
    <div className="login-page">
      <Helmet>
        <title>Login - Charitable Support</title>
        <meta name="description" content="Login to your Charitable Support account" />
      </Helmet>
      <div className="login-container">
        <div className="login-box">
          <h1>Welcome Back</h1>
          <p className="subtitle">Please login to your account</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button type="submit" className="login-button">Login</button>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            <Link to="/" className="back-home">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 