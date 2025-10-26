import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./BookAppointment.css";

export default function BookAppointment() {
  const location = useLocation();
  const doctorData = location.state?.doctor;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    fromDate: "",
    toDate: "",
    appointmentType: "",
    doctor: doctorData ? doctorData.name : "",
    specialty: doctorData ? doctorData.specialty : "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (doctorData) {
      setForm((prev) => ({
        ...prev,
        doctor: doctorData.name,
        specialty: doctorData.specialty,
      }));
    }
  }, [doctorData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    existingAppointments.push(form);
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="appointment-container">
        <div className="appointment-card">
          <h3>Appointment Requested ✅</h3>
          <p>
            Thank you, <strong>{form.name}</strong>!<br />
            Your request for <strong>{form.appointmentType}</strong> appointment
            with <strong>{form.doctor}</strong> ({form.specialty}) has been
            received.
          </p>
          <p>
            You are available from <b>{form.fromDate}</b> to <b>{form.toDate}</b>.
            <br />
            The doctor will confirm the exact time and contact you at{" "}
            <b>{form.phone}</b>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h2>Book Appointment</h2>
        <form onSubmit={handleSubmit} className="appointment-form">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone or WhatsApp"
            required
          />
          {/* <div className="date-group">
            <div>
              <label>Available From</label>
              <input
                type="date"
                name="fromDate"
                value={form.fromDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>To</label>
              <input
                type="date"
                name="toDate"
                value={form.toDate}
                onChange={handleChange}
                required
              />
            </div>
          </div> */}
          <select
            name="appointmentType"
            value={form.appointmentType}
            onChange={handleChange}
            required
          >
            <option value="">Select Appointment Type</option>
            <option value="Offline Visit">Offline Visit</option>
            <option value="Online Video Call">Online Video Call</option>
          </select>
          <input
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            placeholder="Doctor Name"
            required
            readOnly={!!doctorData}
          />
          <input
            name="specialty"
            value={form.specialty}
            onChange={handleChange}
            placeholder="Specialty"
            required
            readOnly={!!doctorData}
          />
          <button type="submit">Request Appointment</button>
        </form>
      </div>
    </div>
  );
}
