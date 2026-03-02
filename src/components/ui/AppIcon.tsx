import type { AppIconProps } from '../../types';

export const AppIcon = ({ icon: Icon, label, onClick }: AppIconProps) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-1.5 group w-20 min-h-[56px] py-1"
  >
    <div className="p-3 bg-white/10 rounded-xl border border-white/20 shadow-lg backdrop-blur-md group-hover:scale-110 group-hover:bg-white/20 active:scale-95 active:bg-white/25 transition-all">
      <Icon size={32} className="text-white" />
    </div>
    <span className="text-[11px] sm:text-[10px] text-white font-bold drop-shadow-md text-center uppercase tracking-tighter leading-tight">
      {label}
    </span>
  </button>
);
