import React from 'react';
import { Link } from 'react-router-dom';

const FacultyDashboard = ({ name }) => {
  return (
    <div className="dashboard">
      <h1>Welcome, Faculty {name}</h1>
      <p>Your personalized faculty portal interface</p>

      <div className="dashboard-sections">
        <div className="section">
          <h2><Link to="/faculty-attendance">Attendance</Link></h2>
          <p>Manage student attendance records.</p>
        </div>
        <div className="section">
          <h2><Link to="/faculty-sections">Your Sections</Link></h2>
          <p>View and manage your assigned sections.</p>
        </div>
        <div className="section">
          <h2><Link to="/add-marks">Add Marks</Link></h2>
          <p>Enter marks for your students.</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
