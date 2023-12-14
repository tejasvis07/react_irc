// SignUpForm.js
import React, { useState } from 'react';
import './App.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="signup-container">
      <h2><center>Sign Up</center></h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="username"
            placeholder='username'
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>

          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label2>Already have an acc? Sign in .</label2>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
