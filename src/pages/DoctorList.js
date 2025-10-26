import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import doctorsData from "../data/doctorsData";
import "./DoctorList.css";

const DoctorList = () => {
  const { path } = useParams();
  const navigate = useNavigate();

  // Filter and sort doctors
  const filteredDoctors = doctorsData
    .filter((doc) => doc.path === path)
    .sort((a, b) => {
      const feeA = a.fees.toLowerCase().includes("free")
        ? 0
        : parseInt(a.fees.replace(/[^0-9]/g, "")) || 0;
      const feeB = b.fees.toLowerCase().includes("free")
        ? 0
        : parseInt(b.fees.replace(/[^0-9]/g, "")) || 0;
      return feeA - feeB;
    });

  if (filteredDoctors.length === 0) {
    return (
      <div className="doctorlist-bg">
        <div className="doctorlist-box">
          <h2>No doctors found for this specialty.</h2>
        </div>
      </div>
    );
  }

  const specialtyName = filteredDoctors[0].specialty;

  return (
    <div className="doctorlist-bg">
      <div className="doctorlist-box">
        <h2>{specialtyName}</h2>
        <p className="subtitle">Consult top doctors in {specialtyName}</p>

        <div className="doctor-list">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-item">
              <h3>{doctor.name}</h3>
              <p><strong>Experience:</strong> {doctor.experience}</p>
              <p><strong>Consultation Fee:</strong> {doctor.fees}</p>
              <button
                className="book-btn"
                onClick={() => navigate("/book", { state: { doctor } })}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
