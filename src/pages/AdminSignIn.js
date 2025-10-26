import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminSignIn.css';

const AdminSignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Add admin authentication logic here
      navigate('/AdminDashboard');
    } catch (err) {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Admin Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({...form, username: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;