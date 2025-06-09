import React from "react";

// 1) Import your local images from src/assets/
import Wine1 from "../assets/wine1.png";
import Wine2 from "../assets/wine2.png";
import Wine3 from "../assets/wine3.png";

export default function WineCards() {
  // 2) Define the wines array, pointing image to the imported variables
  const wines = [
    {
      id: 1,
      title: "Vintner’s Reserve Cabernet Sauvignon",
      subtitle: "2018 | McLaren Vale",
      volume: "750ml",
      price: "$42",
      memberOnly: true,
      // Use wine1.png for the first card
      image: Wine1,
      points: 93,
    },
    {
      id: 2,
      title: "Russian River Valley Sparkling Rosé",
      subtitle: "2019 | California",
      volume: "750ml",
      price: "$48",
      memberOnly: false,
      // Use wine2.png for the second card
      image: Wine2,
      points: 94,
    },
    {
      id: 3,
      title: "Estate Chardonnay",
      subtitle: "2020 | Napa Valley",
      volume: "750ml",
      price: "$38",
      memberOnly: true,
      // Since you only have two images, reuse wine1.png here
      image: Wine3,
      points: 92,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <div className="grid md:grid-cols-3 gap-6">
        {wines.map((wine) => (
          <div
            key={wine.id}
            className="border rounded-md p-4 relative hover:shadow-md bg-white"
          >
            {/* 1) Points badge */}
            <div className="absolute top-4 left-4 text-xs text-red-700 font-bold leading-tight">
              {wine.points}
              <br />
              POINTS
            </div>

            {/* 2) Favorite heart icon */}
            <button className="absolute top-4 right-4 text-xl">🤍</button>

            {/* 3) Wine image (local import) */}
            <img
              src={wine.image}
              alt={wine.title}
              className="mx-auto h-48 object-contain my-4"
            />

            {/* 4) “Members only” banner */}
            {wine.memberOnly && (
              <div className="text-xs text-center text-white bg-maroon py-1">
                AVAILABLE FOR MEMBERS ONLY
              </div>
            )}

            {/* 5) Wine details */}
            <div className="mt-4">
              <div className="text-xs uppercase text-gray-500">HICKINBOTHAM</div>
              <h3 className="font-semibold mt-1">{wine.title}</h3>
              <p className="text-sm text-gray-500">{wine.subtitle}</p>
              <p className="text-sm text-gray-500">
                {wine.volume} | {wine.price}
              </p>

              {/* 6) Quantity selector + Add to Cart */}
              <div className="flex items-center gap-2 mt-4">
                <button className="border px-2 py-1">-</button>
                <span>1</span>
                <button className="border px-2 py-1">+</button>
                <button className="ml-auto bg-maroon text-white px-4 py-1 text-sm">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}