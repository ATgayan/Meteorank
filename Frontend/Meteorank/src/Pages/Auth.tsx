import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cloud, CloudRain, Sun, Wind } from "lucide-react";

const WeatherAuth = () => {
 
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Panel - Weather Animation */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute top-20 left-20 animate-bounce">
          <Sun className="w-24 h-24 text-yellow-300 opacity-80" />
        </div>
        <div className="absolute top-40 right-32 animate-pulse">
          <Cloud className="w-32 h-32 text-white opacity-60" />
        </div>
        <div className="absolute bottom-32 left-40 animate-bounce delay-150">
          <CloudRain className="w-28 h-28 text-blue-200 opacity-70" />
        </div>
        <div className="absolute top-1/2 right-20 animate-pulse delay-300">
          <Wind className="w-20 h-20 text-gray-200 opacity-50" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-12">
          <h1 className="text-5xl font-bold mb-6">Weather Forecast</h1>
          <p className="text-xl text-center mb-8 opacity-90">
            Your personal weather companion for accurate forecasts and real-time updates
          </p>
          <div className="flex gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Live Updates</div>
            </div>
            <div>
              <div className="text-4xl font-bold">180+</div>
              <div className="text-sm opacity-80">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold">99%</div>
              <div className="text-sm opacity-80">Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4">
              <CloudRain className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-600 mt-2">Sign in to continue.</p>
          </div>

          {/* Auth Button */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                // Redirect to backend login route
                window.location.href = "http://localhost:8081/login";
              }}
              className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all"
            >
              Login with Auth0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAuth;
