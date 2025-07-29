import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import './login.css';

const Login = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Clear form data when switching between login and signup
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    });
    setError('');
  }, [isLogin]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      // Login logic
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        // Store logged in user
        localStorage.setItem('currentUser', JSON.stringify(user));
        history.push('/'); // Redirect to home page
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Signup logic
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      if (users.some(u => u.email === formData.email)) {
        setError('Email already registered');
        return;
      }

      // Create new user
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Auto login after signup
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      history.push('/'); // Redirect to home page
    }
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Charitable Support</title>
      </Helmet>
      <div className="login-box">
        <div className="login-header">
          <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p>{isLogin ? 'Sign in to continue' : 'Join our community'}</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              required
              minLength="6"
            />
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>
          )}
          
          <button type="submit" className="submit-button">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              className="toggle-button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;