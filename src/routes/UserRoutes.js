import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Dashboard from "../pages/user/Dashboard";
import Profile from "../pages/user/Profile";
import Earnings from "../pages/user/Earnings";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="earnings" element={<Earnings />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
