import React, { useEffect, useState } from "react";
import "./AppointmentsScheduled.css";

const AppointmentsScheduled = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // ✅ Sample appointments (will be replaced by DB or localStorage later)
    const sampleAppointments = [
      {
        doctor: "Dr. Riya Mehta",
        date: "25 Oct 2025",
        time: "10:30 AM",
        type: "Online",
        specialty: "Cardiology",
      },
      {
        doctor: "Dr. Arjun Patel",
        date: "28 Oct 2025",
        time: "2:00 PM",
        type: "Offline",
        specialty: "Dermatology",
      },
      {
        doctor: "Dr. Neha Sharma",
        date: "30 Oct 2025",
        time: "4:15 PM",
        type: "Online",
        specialty: "Pediatrics",
      },
    ];

    setAppointments(sampleAppointments);
  }, []);

  return (
    <div className="appointments-bg">
      <div className="appointments-container">
        <h2 className="appointments-title">📅 Scheduled Appointments</h2>

        {appointments.length > 0 ? (
          <div className="appointments-list">
            {appointments.map((appt, index) => (
              <div key={index} className="appointment-card">
                <div className="appointment-header">
                  <h3>{appt.doctor}</h3>
                  <span className={`appt-type ${appt.type.toLowerCase()}`}>
                    {appt.type}
                  </span>
                </div>
                <div className="appointment-details">
                  <p><strong>Specialty:</strong> {appt.specialty}</p>
                  <p><strong>Date:</strong> {appt.date}</p>
                  <p><strong>Time:</strong> {appt.time}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-appointments">No appointments scheduled yet.</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentsScheduled;
