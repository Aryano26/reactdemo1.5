import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Placeholder data until database is connected
  const [stats, setStats] = useState({
    totalDoctors: 25,
    activeDoctors: 18,
    totalPatients: 150,
    activePatients: 120
  });

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Doctors</h3>
          <p>{stats.totalDoctors}</p>
        </div>
        <div className="stat-card">
          <h3>Active Doctors</h3>
          <p>{stats.activeDoctors}</p>
        </div>
        <div className="stat-card">
          <h3>Total Patients</h3>
          <p>{stats.totalPatients}</p>
        </div>
        <div className="stat-card">
          <h3>Active Patients</h3>
          <p>{stats.activePatients}</p>
        </div>
      </div>

      <div className="admin-actions">
        <div className="action-section">
          <h2>Manage Doctors</h2>
          <button className="action-btn">View All Doctors</button>
          <button className="action-btn">Approve New Doctors</button>
          <button className="action-btn">Remove Doctor</button>
        </div>

        <div className="action-section">
          <h2>Manage Patients</h2>
          <button className="action-btn">View All Patients</button>
          <button className="action-btn">Remove Patient</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;