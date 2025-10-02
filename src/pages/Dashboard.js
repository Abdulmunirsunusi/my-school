import React from "react";
import "./Dashboard.css";

function Dashboard() {
  const students = JSON.parse(localStorage.getItem("students")) || [];

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
