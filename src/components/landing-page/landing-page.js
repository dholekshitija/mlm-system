import React from "react";
import "./landing-page.css"; // Import your custom CSS for additional styling
import Container from "react-bootstrap/Container";
//import LandingPageNavBar from "./landing-page-navbar";
import { Routes, Route } from "react-router-dom";
//import Home from "./home/home-component";
import Copyright from "./copyright/copyright";
//import Login from "./login/login-component";
import SignIn from "./signin/signin-component"
import ForgotPassword from "./signin/forget-password"
//import Signup from "./signup/signup-component";
import SignUp from "./signup/signup-component-mui"
//import Dashboard from "../dashboard/dashboard-mui";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* <LandingPageNavBar /> */}
      <LandingPageContainer />
    </div>
  );
};

function LandingPageContainer() {
  return (
    <Container fluid className="content-container">
        <Routes>
          <Route exact path="*" element={<SignIn />} />
          <Route exact path="/home" element={<SignIn />} />
          <Route exact path="/copyright" element={<Copyright />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forget-password" element={<ForgotPassword />} />
          {/* <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
          <Route exact path="/user-dashboard" element={<UserDashboard />} /> */}
        </Routes>
    </Container>
  );
}

export default LandingPage;
