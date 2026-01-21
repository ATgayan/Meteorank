import { Routes, Route, Navigate } from "react-router-dom";
import WeatherPage from "../Pages/Weather_Status";
import LoginPage from "../Pages/Auth";





const AppRoutes = () => (
  <Routes>
    {/* Root redirect */}
    <Route path="/" element={<Navigate to="/dashboard" replace />} />

    {/* Dashboard */}
    <Route path="/dashboard" element={<WeatherPage />} />

    {/* Login */}
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default AppRoutes;
