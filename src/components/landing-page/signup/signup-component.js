import React, { useState } from "react";
import "./signup.css"; // Import your custom CSS for styling
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Perform signup logic here
    console.log("Signup button clicked");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // You can add API calls or state updates for actual signup process
  };

  return (
    <>
      <Row>
        <Col>
          <h2 className="signup-heading">
            Sign Up 
          </h2>
          <div className="signup-form">
            <input
              className="signup-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="signup-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="signup-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="signup-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="btn btn-primary signup-btn"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Signup;
