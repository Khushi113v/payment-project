// src/components/Header.jsx
import { Bell, Scan, HelpCircle, ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Header() {
  const [showLocation, setShowLocation] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const locations = [
    "Bengaluru", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"
  ];

  return (
    <>
      <header className="bg-[#5D2ADD] text-white px-4 py-3 sticky top-0 z-30 shadow-md">
        <div className="flex items-center justify-between max-w-2xl mx-auto relative">

          {/* LEFT: Menu + Location */}
          <div className="flex items-center gap-3">

            {/* Menu Icon (3 lines) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 rounded-full hover:bg-white/10 transition-all"
            >
              <Menu size={28} />
            </button>

            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLocation(!showLocation)}
                className="flex items-center gap-1 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all text-sm font-medium"
              >
                <span>Bengaluru</span>
                <ChevronDown size={16} className={`transition-transform ${showLocation ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {showLocation && (
                <div className="absolute top-12 left-0 w-48 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                  {locations.map((city, i) => (
                    <button
                      key={i}
                      onClick={() => setShowLocation(false)}
                      className={`w-full text-left px-4 py-3 text-[#1a1a1a] hover:bg-[#F4FFF6] transition-all text-sm ${
                        city === "Bengaluru" ? "font-semibold bg-[#F4FFF6]" : ""
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Icons */}
          <div className="flex items-center gap-4">
            <button className="p-1.5 rounded-full hover:bg-white/10 transition-all">
              <Scan size={24} />
            </button>
            <button className="p-1.5 rounded-full hover:bg-white/10 transition-all relative">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                3
              </span>
            </button>
            <button className="p-1.5 rounded-full hover:bg-white/10 transition-all">
              <HelpCircle size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}