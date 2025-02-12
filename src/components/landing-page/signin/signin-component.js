import React, { useState } from "react";
import "./signin.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../../../App";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default to "user"
  const navigate = useNavigate();
  //const { userLoggedIn, setAuthorization } = useAppContext();

  // const handleLogin = async () => {
  //   try {
  //     const response = await AuthService.login(username, password, role);
  //     // Handle successful login, e.g., store tokens or user data in state/contexts
  //     console.log("Login successful:", response);

  //     if (role === "admin") {
  //       navigate("/admin-dashboard");
  //     } else if (role === "user") {
  //       navigate("/user-dashboard");
  //     }
  //   } catch (error) {
  //     // Handle login error, e.g., show error message
  //     console.error("Login error:", error.message);
  //   }
  // };

  return (
    <>
      <Row>
        <Col>
          <h1 className="login-heading">Login</h1>
          <div className="login-form">
            <input
              className="login-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <select
              className="login-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button className="btn btn-primary login-btn">Login</button>
            <p className="not-registered">
              <Link to="/forget-password">Forgot password?</Link>
            </p>

            <p className="not-registered">
              Not registered yet? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </Col>
      </Row>

      <Row className="copyright-container">
        <Col>
          <p className="copyright-text">
            <Link to="/copyright"></Link>
            {/* © {new Date().getFullYear()} Your Company Name. All rights reserved. */}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Login;
