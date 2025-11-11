// src/components/Footer.jsx
import { Home, History, Scan, Wallet, CircleUser } from 'lucide-react';

const menuItems = [
  { Icon: Home, label: "Home", active: true },
  { Icon: History, label: "History" },
  { Icon: Scan, label: "Scanner" },
  { Icon: Wallet, label: "Add wallet" },
  { Icon: CircleUser, label: "Profile" },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-around py-2">
          {menuItems.map(({ Icon, label, active }, i) => (
            <button
              key={i}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                active ? "text-[#5D2ADD]" : "text-[#666666]"
              }`}
            >
              <Icon
                size={24}
                strokeWidth={active ? 2.5 : 1.8}
                className={active ? "" : "opacity-70"}
              />
              <span
                className={`text-xs font-medium ${
                  active ? "font-bold text-[#5D2ADD]" : "text-[#666666]"
                }`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}