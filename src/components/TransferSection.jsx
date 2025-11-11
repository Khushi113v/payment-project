import { Smartphone, Tv, Satellite, MoreHorizontal, ChevronRight } from 'lucide-react';

export default function TransferSection() {
  const rechargeOptions = [
    { Icon: Smartphone, label: "Mobile Recharge" },
    { Icon: Tv, label: "DTH Recharge" },
    { Icon: Satellite, label: "Dish TV Recharge" },
    { Icon: MoreHorizontal, label: "Other" },
  ];

  return (
    <div className="bg-white mx-4 mt-6 rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-[#1a1a1a]">Transfer Money</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-[#5D2ADD]">
          My UPI IDs
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {rechargeOptions.map(({ Icon, label }, i) => (
          <button
            key={i}
            className="flex flex-col items-center justify-center py-3 rounded-xl hover:bg-[#F8F5FF] transition-all h-24"
          >
            <div className="p-2.5 rounded-full bg-[#5D2ADD] mb-1.5">
              <Icon size={22} className="text-white" />
            </div>
            <p className="text-[10px] font-medium text-[#1a1a1a] text-center leading-tight px-1 line-clamp-2">
              {label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
