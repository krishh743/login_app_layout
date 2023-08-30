import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/home-page/HomePage";
import Dashboard from "../../Pages/dashboard/Dashboard";
import LoginPage from "../../Pages/login-page/LoginPage";
import UserDetails from "../../Pages/user-details/UserDetails";
import CameraPage from "../../Pages/camera-access/CameraPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/cam" element={<CameraPage />} />
      <Route path="userdetails" element={<UserDetails />} />
    </Routes>
  );
}
export default AppRoutes;
