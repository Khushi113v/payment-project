// src/components/TransferSection.jsx
import { Smartphone, Tv, Satellite, MoreHorizontal, ChevronRight } from 'lucide-react';

export default function TransferSection() {
  const rechargeOptions = [
    { Icon: Smartphone, label: "Mobile Recharge" },
    { Icon: Tv, label: "DTH Recharge" },
    { Icon: Satellite, label: "Dish TV Recharge" },
    { Icon: MoreHorizontal, label: "Other" },
  ];

  return (
    <div className="bg-white mx-4 mt-6 md:mx-8 lg:mx-16 rounded-2xl shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">Transfer Money</h2>
        <button className="flex items-center gap-1 text-sm md:text-base font-medium text-[#5D2ADD]">
          My UPI IDs
          <ChevronRight size={16} className="md:w-5 md:h-5" />
        </button>
      </div>

      {/* 4 Options in ONE LINE - RESPONSIVE GRID */}
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {rechargeOptions.map(({ Icon, label }, i) => (
          <button
            key={i}
            className="flex flex-col items-center justify-center py-3 md:py-4 rounded-xl hover:bg-[#F8F5FF] transition-all h-24 md:h-32 group"
          >
            {/* Icon - Bigger on Desktop */}
            <div className="p-2.5 md:p-4 rounded-full bg-[#5D2ADD] mb-1.5 md:mb-2 group-hover:scale-110 transition-transform">
              <Icon size={22} className="text-white md:w-7 md:h-7" />
            </div>

            {/* Text - Bigger & Bolder on Desktop */}
            <p className="text-[10px] md:text-sm lg:text-base font-medium text-[#1a1a1a] text-center leading-tight px-1 line-clamp-2">
              {label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}