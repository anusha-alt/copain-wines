import React, { useState } from 'react';
import Header from "./Header";
import WineCards from "./components/WineCards"
import FilterSidebar from "./components/FilterSidebar"
const wines = [
  {
    id: 1,
      title: "Vintner’s Reserve Cabernet Sauvignon",
      subtitle: "2018 | McLaren Vale",
      volume: "750ml",
      price: "$42",
      memberOnly: true,
      // Placeholder image 300×400 with custom “Wine 1” text
      image: "https://via.placeholder.com/300x400.png?text=Wine+1",
      points: 93,
  },
  {
    id: 2,
    title: "Russian River Valley Sparkling Rosé",
    subtitle: "2018 | McLaren Vale",
    type: "Cabernet Sauvignon",
    volume: "750ml",
    price: "$42",
    memberOnly: false,
    image: "https://images.unsplash.com/photo-1601924579534-874a7946e8b3",
  },
  {
    id: 3,
    title: "Russian River Valley Sparkling Rosé",
    subtitle: "2018 | McLaren Vale",
    type: "Cabernet Sauvignon Extra Text added",
    volume: "750ml",
    price: "$42",
    memberOnly: true,
    image: "https://images.unsplash.com/photo-1604917623896-4ac1911c3a2b",
  },
];

export default function App() {
    const [isFilterOpen, setIsFilterOpen]= useState(false);
  return (
    <div className="font-sans text-gray-900">
        <Header />
      

      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/red-wine-banner.png')",
        }}
      ></div>

      {/* Shop Section */}
      <div className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Shop Wines</h2>
        
      {/* the filter sidebar*/}
      <FilterSidebar 
      isOpen= {isFilterOpen}
      onClose={() => setIsFilterOpen(false)}
      />

        

        {/* Wine Cards */}
       <WineCards />
      </div>
    </div>
  );
}