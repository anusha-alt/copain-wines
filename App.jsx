import React, { useState, useEffect } from 'react';
import Header from "./Header";
import WineCards from "./components/WineCards";
import FilterSidebar from "./components/FilterSidebar";

import { wines } from "./array"
export default function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterType, setFilterType]= useState("");
    useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);
  return (
    <div className="font-sans text-gray-900">
      {/* pass wines into Header */}
      <Header wines={wines} />

      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/red-wine-banner.png')",
        }}
      />

      {/* Shop Section */}
      <div className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Shop Wines</h2>

        {/* the filter sidebar */}
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onTypeSelect={setFilterType}
          selectedType={filterType}
        />

        {/* Wine Cards */}
        <WineCards filterType={filterType} />
      </div>
    </div>
  );
}
