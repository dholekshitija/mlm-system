import "./App.css";
import React, { createContext, useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LandingPage from "./components/landing-page/landing-page";
import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/User/Home";
import ReferralTeam from "./pages/User/ReferralTeam";
import Purchase from "./pages/User/MyPurchase";
import UserSetting from "./pages/User/UserSetting";
import Earning from "./pages/User/Earning";
import SalesCommisions from "./pages/User/SalesCommisions";
import UserIndex from "./pages/User/Index";


const AppContext = createContext();

function App() {
  return (
    <>
      <ReactRoutes>
      <Route path="/" element={<Navigate to="/user" replace />} />

      {/* ✅ User Dashboard as Parent Route */}
      <Route path="/user/*" element={<UserIndex />}>
        <Route index element={<Dashboard />} />  {/* Default Home Page */}
        <Route path="earning" element={<Earning />} />
        <Route path="referrals" element={<ReferralTeam />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="commisions" element={<SalesCommisions />} />
        <Route path="settings" element={<UserSetting />} />
      </Route>
          
          
        
      </ReactRoutes>
    </>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};

export default App;
