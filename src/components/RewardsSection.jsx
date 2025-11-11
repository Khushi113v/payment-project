// src/components/RewardsSection.jsx
import { Gift, ChevronRight } from 'lucide-react';

export default function RewardsSection() {
  return (
    <div className="mx-4 mt-6">
      <button className="w-full max-w-full bg-white rounded-2xl shadow-sm p-4 flex items-center gap-3 hover:shadow-md transition-all overflow-hidden">
        <div className="p-2.5 bg-[#5D2ADD] rounded-full flex-shrink-0">
          <Gift size={22} className="text-white" />
        </div>

        <span className="flex-1 text-left text-base font-medium text-[#1a1a1a] truncate pr-2">
          View my rewards
        </span>

        <ChevronRight size={20} className="text-[#666666] flex-shrink-0" />
      </button>
    </div>
  );
}