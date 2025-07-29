import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // In a real application, you would send this data to your backend
    // For demo purposes, we'll just simulate a successful signup
    const userData = {
      name: formData.name,
      email: formData.email
    };
    localStorage.setItem('user', JSON.stringify(userData));
    history.push('/');
  };

  return (
    <div className="signup-page">
      <Helmet>
        <title>Sign Up - Charitable Support</title>
        <meta name="description" content="Create your Charitable Support account" />
      </Helmet>
      <div className="signup-container">
        <div className="signup-box">
          <h1>Create Account</h1>
          <p className="subtitle">Join our community of supporters</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

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
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
            
            <button type="submit" className="signup-button">Create Account</button>
          </form>
          
          <div className="signup-footer">
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
            <Link to="/" className="back-home">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 