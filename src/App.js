import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import BookAppointment from "./pages/BookAppointment";
import DoctorList from "./pages/DoctorList";
import Doctors from "./pages/Doctors";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


import AppointmentsScheduled from "./pages/AppointmentsScheduled";
import MedicinesRecommended from "./pages/MedicinesRecommended";
import PreviousAppointments from "./pages/PreviousAppointments";
import Settings from "./pages/Settings";

import DoctorSignIn from './pages/DoctorSignIn';
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorSchedule from './pages/DoctorSchedule';
import DoctorRegistration from './pages/DoctorRegistration';

import RoleSelection from './pages/RoleSelection';
import SignIn from './pages/SignIn';
import AdminSignIn from './pages/AdminSignIn';
import AdminDashboard from './pages/AdminDashboard';
import DoctorProfile from "./pages/DoctorProfile";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* ---------- Public Routes ---------- */}
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<AuthPage />} />
              <Route path="/register" element={<AuthPage />} />

              {/* ---------- Patient Routes ---------- */}
              <Route
                path="/doctors"
                element={
                  <PrivateRoute allowedRoles={["patient"]}>
                    <Doctors />
                  </PrivateRoute>
                }
              />
              <Route
                path="/speciality/:path"
                element={
                  <PrivateRoute allowedRoles={["patient"]}>
                    <DoctorList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/book"
                element={
                  <PrivateRoute allowedRoles={["patient"]}>
                    <BookAppointment />
                  </PrivateRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <PrivateRoute allowedRoles={["patient"]}>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute allowedRoles={["patient"]}>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/appointments"
                element={
                  <PrivateRoute allowedRoles={["patient"]}>
                    <AppointmentsScheduled />
                  </PrivateRoute>
                }
              />
              <Route
                path="/previous-appointments"
                element={
                  <PrivateRoute allowedRoles={["patient"]}>
                    <PreviousAppointments />
                  </PrivateRoute>
                }
              />
              <Route
                path="/medicines"
                element={
                  <PrivateRoute allowedRoles={["patient"]}>
                    <MedicinesRecommended />
                  </PrivateRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <PrivateRoute allowedRoles={["patient"]}>
                    <Settings />
                  </PrivateRoute>
                }
              />

              {/* ---------- Doctor Dashboard ---------- */}
              <Route
                path="/DoctorDashboard"
                element={
                  // <PrivateRoute allowedRoles={["doctor"]}>
                    <DoctorDashboard />
                  // </PrivateRoute>
                }
              />
              <Route
                path="/doctor-schedule"
                element={
                  // <PrivateRoute allowedRoles={["doctor"]}>
                    <DoctorSchedule />
                  // </PrivateRoute>
                }
              />
              <Route
                path="/doctor-appointments"
                element={
                  // <PrivateRoute allowedRoles={["doctor"]}>
                    <AppointmentsScheduled />
                  // </PrivateRoute>
                }
              />
              <Route
                path="/doctor-profile"
                element={
                  // <PrivateRoute allowedRoles={["doctor"]}>
                    <DoctorProfile />
                  // </PrivateRoute>
                }
              />
              
              {/* ---------- Admin Dashboard ---------- */}
              <Route
                path="/admin-dashboard"
                element={
                  <PrivateRoute allowedRoles={["admin"]}>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/RoleSelection" element={<RoleSelection />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/DoctorSignIn" element={<DoctorSignIn />} />
          {/* <Route path="/AdminSignIn" element={<AdminSignIn />} /> */}
          <Route path="/DoctorRegistration" element={<DoctorRegistration />} />
          <Route path="/AdminSignIn" element={<AdminSignIn />} />
          <Route 
            path="/AdminDashboard" 
            element={
              // <PrivateRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              // </PrivateRoute>
            } 
          />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
