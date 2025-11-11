import { X, HelpCircle, Shield, LogOut } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-[#5D2ADD] p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-all"
          >
            <X size={22} className="text-white" />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-[#F8F5FF] rounded-2xl p-6 mb-6 text-center">
            <div className="w-40 h-40 mx-auto mb-4 p-3 bg-white rounded-xl shadow-sm">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=PHONEPE_USER_12345"
                alt="Scan QR"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-[#5D2ADD]">Scan any QR code</p>
            {/* <p className="text-xs text-[#666666] mt-1">Pay instantly with PhonePe</p> */}
          </div>

          {/* Menu Items - Help & Support + Security */}
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#F8F5FF] transition-all text-left mb-2">
  <HelpCircle size={22} className="text-[#5D2ADD]" />
  <span className="text-base font-medium text-[#1a1a1a]">Help & Support</span>
</button>

<button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#F8F5FF] transition-all text-left mb-2">
  <Shield size={22} className="text-[#5D2ADD]" />
  <span className="text-base font-medium text-[#1a1a1a]">Security</span>
</button>
        </div>

        <div className="p-4 border-t">
          <button className="group w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-[#F8F5FF] transition-all duration-200">
            <LogOut size={22} className="text-[#5D2ADD] group-hover:text-[#4A1AB8] transition-colors" />
            <span className="text-lg font-semibold text-[#5D2ADD] group-hover:text-[#4A1AB8] transition-colors">
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
}