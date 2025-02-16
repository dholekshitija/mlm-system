// src/layouts/UserLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../../components/sidebar/Navbar";
import UserSidebar from "../../components/sidebar/UserSidebar";

const UserIndex = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <UserSidebar/>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Navbar/>

        {/* Page Content (Dynamically changes based on route) */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserIndex;
