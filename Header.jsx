import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Logo from "./assets/copain-logo.png"; // adjust filename if yours differs

export default function Header() {
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
            <ShoppingCartIcon className="h-5 w-5 cursor-pointer" />
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
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4b1e24] whitespace-nowrap">
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
}