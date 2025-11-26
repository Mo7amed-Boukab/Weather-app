import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#051322] to-[#1c6e68] p-4">
      <div className="max-w-xl mx-auto pt-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Weather App
        </h1>
        <SearchBar onSearch={() => {}} />
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
