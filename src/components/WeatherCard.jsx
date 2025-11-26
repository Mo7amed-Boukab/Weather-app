const WeatherCard = ({ weatherData, loading, error, forecastData }) => {
  if (loading) {
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-teal-200 text-4xl animate-spin flex items-center justify-center border-t-teal-200 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-white text-2xl animate-spin flex items-center justify-center border-t-white rounded-full"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-white/90 font-bold bg-white/10 rounded-md backdrop-blur-sm">
        {error}
      </div>
    );
  }

  if (!weatherData || !forecastData) {
    return (
      <div className="text-center py-8 text-white/90 font-bold bg-white/10 rounded-md backdrop-blur-sm">
        No weather information for this location !
      </div>
    );
  }

  console.log(weatherData.name);

  const { name, main, weather, wind } = weatherData;
  const temp = Math.round(main?.temp);
  const feelsLike = Math.round(main?.feels_like);

  const dailyForecasts = [];
  for (let i = 0; i < 5; i++) {
    dailyForecasts.push(forecastData.list[i * 8]);
  }
  return (
    <div className="text-white p-4 rounded-lg backdrop-blur-sm bg-white/10 shadow-xl">
      <div className="text-center py-4 mb-4">
        <h2 className="text-2xl font-bold capitalize">{name}</h2>
        <p className="text-gray-300 capitalize">{weather[0].description}</p>
      </div>

      <div className="flex items-center justify-center mb-6">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
          alt={weather[0]?.description}
          className="w-20 h-20"
        />
        <span className="text-6xl font-light ml-4">{temp} °</span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm mb-6">
        <div className="bg-white/20 p-3 rounded backdrop-blur-sm">
          <p className="text-gray-300">Feels like</p>
          <p className="font-semibold">{feelsLike} °C</p>
        </div>
        <div className="bg-white/20 p-3 rounded backdrop-blur-sm">
          <p className="text-gray-300">Humidity</p>
          <p className="font-semibold">{main.humidity} %</p>
        </div>
        <div className="bg-white/20 p-3 rounded backdrop-blur-sm">
          <p className="text-gray-300">Wind Speed</p>
          <p className="font-semibold">{wind.speed} m/s</p>
        </div>
        <div className="bg-white/20 p-3 rounded backdrop-blur-sm">
          <p className="text-gray-300">Pressure</p>
          <p className="font-semibold">{main.pressure} hPa</p>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-4 text-center ">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-2">
        {dailyForecasts.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const dayName =
            index === 0
              ? "Today"
              : date.toLocaleDateString("en", { weekday: "short" });

          return (
            <div
              key={day.dt}
              className="flex flex-col items-center justify-center bg-white/10 p-2 rounded text-center"
            >
              <span className="font-medium text-sm">{dayName}</span>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                className="w-8 h-8 my-1"
              />
              <span className="font-semibold text-sm">
                {Math.round(day.main.temp)}°C
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherCard;
