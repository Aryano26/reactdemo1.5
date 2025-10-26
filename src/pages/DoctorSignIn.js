// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './DoctorSignIn.css';

// const DoctorSignIn = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // TODO: Add authentication logic
//       navigate('/DoctorDashboard'); // Changed to match component name
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="signin-container">
//       <div className="signin-card">
//         <h2>Doctor Sign In</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({...form, email: e.target.value})}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) => setForm({...form, password: e.target.value})}
//               required
//             />
//           </div>
//           <button type="submit" className="signin-btn">Sign In</button>
//         </form>
//         <p className="register-link">
//           New Doctor? <Link to="/DoctorRegistration">Register here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DoctorSignIn;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DoctorSignIn.css';

const DoctorSignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.email || !form.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // TODO: Add actual authentication logic here
      console.log('Doctor attempting to sign in:', form.email);
      
      // For now, just navigate to doctor dashboard
      navigate('/DoctorDashboard', { replace: true });
    } catch (err) {
      console.error('Sign in error:', err);
      setError('Invalid credentials');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Doctor Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <p className="register-link">
          New Doctor? <Link to="/DoctorRegistration">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default DoctorSignIn;