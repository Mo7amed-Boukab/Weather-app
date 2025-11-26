

const WeatherCard = () => {
  return (
    <div className="text-white p-4 rounded-lg backdrop-blur-sm bg-white/10 shadow-xl">
      <div className="text-center py-4 mb-4">
        <h2 className="text-2xl font-bold capitalize">nador</h2>
        <p className="text-gray-300 capitalize">Sun today</p>
      </div>

      <div className="flex items-center justify-center mb-6">
        <img src="" alt="" className="w-20 h-20" />
        <span className="text-6xl font-light ml-4">24°</span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-white/20 p-3 rounded backdrop-blur-sm">
          <p className="text-gray-300">Feels like</p>
          <p className="font-semibold">12 °C</p>
        </div>
        <div className="bg-white/20 p-3 rounded backdrop-blur-sm">
          <p className="text-gray-300">Humidity</p>
          <p className="font-semibold">85 %</p>
        </div>
        <div className="bg-white/20 p-3 rounded backdrop-blur-sm">
          <p className="text-gray-300">Wind Speed</p>
          <p className="font-semibold">5 m/s</p>
        </div>
        <div className="bg-white/20 p-3 rounded backdrop-blur-sm">
          <p className="text-gray-300">Pressure</p>
          <p className="font-semibold">1013 hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
