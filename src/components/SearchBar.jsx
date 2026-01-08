import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      onSearch(location);
    }
  };
  return (
    <div className="flex justify-center py-6">
      <input
        className="px-4 py-2.5 w-full rounded-md backdrop-blur-sm bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-white/80"
        type="text"
        placeholder="Enter your location ..."
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        onKeyDown={searchLocation}
      />
    </div>
  );
};

export default SearchBar;
