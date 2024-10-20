import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentLogin.css';

const StudentLogin = ({ onLogin }) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginId, password, 'student');
  };

  return (
    <div className="login-page">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login ID:</label> {/* Now black due to CSS */}
          <input
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label> {/* Now black due to CSS */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <div className="login-options">
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
