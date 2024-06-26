import React, { useState } from "react";

export default function SearchBoxHero({ onSearchChange, onKeyPress }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    onSearchChange(value); // Notify the parent component of the search value change
  };

  return (
    <div className="w-1/3 mt-8 h-fit">
      <div className="flex w-full">
        <div className="flex w-full border-2 rounded-full">
          <button type="button" className="flex items-center justify-center px-4 bg-white border-r rounded-l-full">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
          <input type="text" className="w-full px-4 py-4 border-transparent rounded-r-full focus:outline-0" placeholder="Search..." onChange={handleSearchChange} onKeyPress={onKeyPress} />
        </div>
      </div>
    </div>
  );
}
