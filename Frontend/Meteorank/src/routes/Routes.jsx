import React from "react";
import { Routes, Route } from "react-router-dom";
import WeatherPage from "../Pages/Weather_Status"; 
import LoginPage from "../Pages/Auth";

const AppRoutes = () => (
  <Routes>
    {/* Protected dashboard */}
    <Route
      path="/dashboard"
      element={
          <WeatherPage />
      }
    />
    {/* Login page */}
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default AppRoutes;
