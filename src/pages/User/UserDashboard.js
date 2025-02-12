import React from "react";
import { Link, Outlet } from "react-router-dom";


const UserDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* <UserSidebar/> */}
      <div style={{ width: "250px", padding: "20px", background: "#f4f4f4", height: "100vh" }}>
        <h3>Dashboard</h3>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/dashboard/profile">Profile</Link></li>
            <li><Link to="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav>
      </div>

      {/* Content Area */} 
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet /> {/* This will load the selected component */}
      </div>
    </div>
  );
};

export default UserDashboard;
