import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Logo from "./assets/copain-logo.png";
import { useCartStore } from "./store/useCartStore";

const Header = ({ wines }) => {
  const quantities = useCartStore((s) => s.quantities);
  const totalItems = Object.values(quantities).reduce((sum, n) => sum + n, 0);

  const [showCart, setShowCart] = useState(false);

  const navItems = [
    { id: 1, name: "OUR WINES" },
    { id: 2, name: "CLUBS" },
    { id: 3, name: "SUSTAINABILITY" },
    { id: 4, name: "ENTERTAIN" },
    { id: 5, name: "ABOUT" },
    { id: 6, name: "VISIT" },
  ];

  return (
    <header className="w-full font-sans">
      {/* Top burgundy bar */}
      <div className="bg-[#4b1e24] py-1.5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex justify-end">
          <span className="text-white text-[11px] font-medium tracking-[0.2em]">
            SHIP TO: CO
          </span>
        </div>
      </div>

      {/* Logo + icons row */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left: logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Copain Wines" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-serif italic text-[#4b1e24]">
              Copain Wines
            </span>
          </div>

          {/* Right: search, cart, user icons */}
          <div className="flex gap-6 text-[#4b1e24]">
            <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer" />

            {/* Cart with badge & popup */}
            <div className="relative">
              <ShoppingCartIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => setShowCart((v) => !v)}
              />
              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -top-2 -right-2
                    bg-[#4b1e24] text-white
                    text-[10px] font-semibold
                    rounded-full
                    w-4 h-4
                    flex items-center justify-center
                    shadow
                  "
                >
                  {totalItems}
                </span>
              )}

              {showCart && (
                <div
                  className="
                    absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg
                    p-4 text-xs z-50
                  "
                >
                  <h4 className="font-bold mb-2">Your Cart</h4>

                  {wines
                    .filter((w) => (quantities[w.id] || 0) > 0)
                    .map((w) => {
                      const unitPrice = Number(
                        w.price.toString().replace(/[^0-9.]/g, "")
                      );
                      const totalPrice = unitPrice * quantities[w.id];

                      return (
                        <div
                          key={w.id}
                          className="flex items-center gap-3 py-2 border-b last:border-b-0"
                        >
                          <img
                            src={w.image}
                            alt={w.title}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="font-medium">{w.title}</div>
                            <div className="text-sm text-gray-500">
                              {quantities[w.id]} × ${unitPrice}
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-[#4b1e24]">
                            ${totalPrice.toFixed(2)}
                          </div>
                        </div>
                      );
                    })}

                  <div className="pt-4 border-t mt-4 text-right text-sm font-semibold text-[#4b1e24]">
                    Total: $
                    {wines
                      .reduce((sum, w) => {
                        const qty = quantities[w.id] || 0;
                        const unitPrice = Number(
                          w.price.toString().replace(/[^0-9.]/g, "")
                        );
                        return sum + qty * unitPrice;
                      }, 0)
                      .toFixed(2)}
                  </div>

                  {Object.values(quantities).every((q) => q === 0) && (
                    <p className="italic text-gray-500">Your cart is empty.</p>
                  )}
                </div>
              )}
            </div>

            <UserIcon className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-start py-3">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4b1e24] whitespace-nowrap cursor-pointer">
                    {item.name}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#4b1e24] transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
