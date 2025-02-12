// src/layouts/AdminLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AdminSidebar from "../components/common/AdminSidebar";
import AdminNavbar from "../components/common/AdminNavbar";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/landing-page/navbar";

const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
      <Navbar />
        
        {/* Page Content (Dynamically changes based on route) */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
