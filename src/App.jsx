import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";

function App() {
  const api_key = "fd7c404ca6c6cfbd4c96b52f6b776829";

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForcastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`
      );
      const resforecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${api_key}&units=metric`
      );
      setWeatherData(res.data);
      setForcastData(resforecast.data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#051322] to-[#1c6e68] p-4">
      <div className="max-w-xl mx-auto pt-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Weather App
        </h1>
        <SearchBar onSearch={fetchWeather} />
        <WeatherCard
          weatherData={weatherData}
          loading={loading}
          error={error}
          forecastData={forecastData}
        />
      </div>
    </div>
  );
}

export default App;
