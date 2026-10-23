import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Registration form submitted');
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="userName" placeholder="Username" value={formData.userName} onChange={handleChange} required />
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
