import React from "react";
import { useCartStore } from "../store/useCartStore";
import { wines as allWines } from "../array";
import { useFavoritesStore } from "../store/useFavoritesStore";

export default function WineCards({ filterType = "" }) {
  const quantities = useCartStore((s) => s.quantities);
  const increment = useCartStore((s) => s.increment);
  const decrement = useCartStore((s) => s.decrement);
  const favorites = useFavoritesStore((s) => s.favorites);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  // Only show matching wines (or all if no filter)
  const winesToDisplay = allWines.filter(
    (wine) => !filterType || wine.type === filterType
  );

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <div className="grid md:grid-cols-3 gap-6">
        {winesToDisplay.map((wine) => {
          const count = quantities[wine.id] || 0;
          const isFavorite = favorites.includes(wine.id);

          return (
            <div
              key={wine.id}
              className="border rounded-md p-4 relative hover:shadow-md bg-white flex flex-col justify-between h-full"
            >
              {/* 1) Points badge */}
              <div className="absolute top-4 left-4 text-xs text-red-700 font-bold leading-tight">
                {wine.points}
                <br />
                POINTS
              </div>

              {/* 2) Favorite heart icon */}
              <button
                onClick={() => toggleFavorite(wine.id)}
                className="absolute top-4 right-4 text-xl"
              >
                {isFavorite ? "❤️" : "🤍"}
              </button>

              {/* 3) Wine image */}
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
                  <button
                    onClick={() => decrement(wine.id)}
                    className="border px-2 py-1"
                  >
                    −
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={() => increment(wine.id)}
                    className="border px-2 py-1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => increment(wine.id)}
                    className="ml-auto bg-maroon text-white px-4 py-1 text-sm"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
