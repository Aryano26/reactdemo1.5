import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaCalendar, FaStethoscope } from 'react-icons/fa';
import specialities from "../data/specialities"; 
import './Doctors.css';

const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const navigate = useNavigate(); // ✅ Added for routing

  const handleCardClick = (path) => {
    navigate(`/speciality/${path}`);
  };

  return (
    <div className="doctors-page">
      {/* 🔷 Search Banner */}
      <div className="search-banner">
        <div className="banner-text">
          <h1>Find the right doctor for your ailments</h1>
          <p>Call +91-8040245807 to book an appointment</p>
        </div>
        <div className="doctor-images">
          <img src="/images/doctorimg.png" alt="Doctors" className="doctor-img-large" />
        </div>
      </div>

      {/* 🔷 Search Section */}
      <div className="search-section">
        <h2 className="search-title">Find a Doctor in 3 easy steps</h2>
        <form className="search-form">
          
          {/* Select Speciality */}
          <div className="form-group">
            <label htmlFor="specialty-select">Select Speciality*</label>
            <div className="input-box">
              <FaSearch className="input-icon" />
              <select
                id="specialty-select"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                <option value="">Enter Speciality</option>
                {specialities.map(specialty => (
                  <option key={specialty.id} value={specialty.path}>
                    {specialty.name} / {specialty.nameHi}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Select Date */}
          <div className="form-group">
            <label htmlFor="date-input">Select Date*</label>
            <div className="input-box">
              <FaCalendar className="input-icon" />
              <input
                id="date-input"
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-group submit-group">
            <button type="submit" className="search-btn">Submit</button>
          </div>
        </form>
      </div>

      {/* 🔷 Specialties Grid */}
      <div className="specialties-section">
        <h2>CareConnect's Specialities - Expertise You Can Trust</h2>
        <div className="specialties-grid">
          {specialities.map(specialty => (
            <div
              key={specialty.id}
              className="specialty-card"
              onClick={() => handleCardClick(specialty.path)} // ✅ added click navigation
            >
              <div className="specialty-icon-container">
                <FaStethoscope className="specialty-card-icon" /> 
              </div>
              <h3 className="specialty-name-en">{specialty.name}</h3>
              <p className="specialty-name-hi">{specialty.nameHi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
