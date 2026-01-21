import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
import { api } from "../api/axios";

interface CityWeather {
  city: string;
  humidity: number;
  windSpeed: number;
  cloudCoverage: number;
  description: string;
  temperature: number;
  weather: string;
  comfortScore: number;
  rank: number;
}

const WeatherDashboard = () => {
  const { getAccessTokenSilently, loginWithRedirect, logout } = useAuth0();

  const [darkMode, setDarkMode] = useState(false);
  const [citiesData, setCitiesData] = useState<CityWeather[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityWeather | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        // Try to get access token silently
        let token: string | undefined;
        try {
          token = await getAccessTokenSilently({
            authorizationParams: {
              audience: "https://weather-api",
              scope: "openid profile email",
              
            },
            
          });
        } catch (err: any) {
          if (err.error === "consent_required") {
            await loginWithRedirect({
              authorizationParams: {
                audience: "https://weather-api",
                scope: "openid profile email",
                prompt: "consent",
              },
            });
            return; // stop fetch, user redirected
          } else {
            throw err;
          }
        }

        // Call backend with JWT
        const res = await api.get("/weather/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        let cities: CityWeather[] = [];
        if (Array.isArray(res.data)) {
          cities = res.data;
        } else if (res.data && Array.isArray(res.data.data)) {
          cities = res.data.data;
        }

        cities.sort((a, b) => a.rank - b.rank);
        setCitiesData(cities);
        setSelectedCity(cities[0] || null);
      } catch (err) {
        console.error("Failed to fetch weather data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [getAccessTokenSilently, loginWithRedirect]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={darkMode ? "dark" : ""}>
          <div className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-6 gap-4 md:gap-0">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Weather Analytics Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Monitor and analyze weather patterns in real-time
                </p>
              </div>

              <div className="flex gap-4">
                {/* Dark mode toggle if needed */}
                <button
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin + "/login" } })
                  }
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            </header>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 md:px-8 pb-8">
              {/* City List */}
              <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Cities Ranked
                </h2>

                <ul className="space-y-3">
                  {citiesData.map((city) => (
                    <li
                      key={city.city}
                      onClick={() => setSelectedCity(city)}
                      className={`p-3 rounded-lg cursor-pointer transition 
                      ${
                        selectedCity?.city === city.city
                          ? "bg-blue-500 text-white"
                          : city.rank === 1
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-gray-100 dark:bg-gray-700 hover:bg-blue-500 hover:text-white"
                      }`}
                    >
                      {city.city}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weather Details */}
              {selectedCity && (
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Weather Details - {selectedCity.city}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100">
                      <p className="text-sm">Temperature</p>
                      <h3 className="text-2xl font-bold">{selectedCity.temperature} °C</h3>
                    </div>

                    <div className="p-4 rounded-xl bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100">
                      <p className="text-sm">Humidity</p>
                      <h3 className="text-2xl font-bold">{selectedCity.humidity} %</h3>
                    </div>

                    <div className="p-4 rounded-xl bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100">
                      <p className="text-sm">Wind Speed</p>
                      <h3 className="text-2xl font-bold">{selectedCity.windSpeed} km/h</h3>
                    </div>

                    <div className="p-4 rounded-xl bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100">
                      <p className="text-sm">Comfort Score</p>
                      <h3 className="text-2xl font-bold">{selectedCity.comfortScore}</h3>
                    </div>

                    <div className="p-4 rounded-xl bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100">
                      <p className="text-sm">Cloud Coverage</p>
                      <h3 className="text-2xl font-bold">{selectedCity.cloudCoverage} %</h3>
                    </div>

                    <div className="p-4 rounded-xl bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100">
                      <p className="text-sm">Description</p>
                      <h3 className="text-lg font-medium">{selectedCity.description}</h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherDashboard;
