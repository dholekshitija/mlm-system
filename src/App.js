import "./App.css";
import React, { createContext, useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LandingPage from "./components/landing-page/landing-page";
import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
// import ashboard from "./pages/Home";

// import Users from "./pages/Users";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserDashboard from "./pages/User/UserDashboard";
import Dashboard from "./pages/User/Home";

import Dashboard1 from "./pages/User/Earning1";
import ReferralTeam from "./pages/User/ReferralTeam";
import Purchase from "./pages/User/MyPurchase";

const AppContext = createContext();

function App() {
  return (
    <>
      <ReactRoutes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {/* ✅ Define UserDashboard as the parent route */}
        <Route path="/dashboard/*" element={<UserDashboard />}>
          <Route index element={<Purchase/>} /> {/* Default dashboard page */}
          {/* <Route path="earning" element={<Earning1 />} /> */}
          {/* <Route path="team" element={<Team />} />
          <Route path="earnings" element={<Earnings />} />  */}
        </Route>
          
        
      </ReactRoutes>
    </>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};

export default App;
