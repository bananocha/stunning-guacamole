import { Minus, Maximize2, X } from 'lucide-react';
import type { WindowProps } from '../../types';

export const Window = ({
  title,
  icon: Icon,
  isOpen,
  onClose,
  children,
  isActive,
  onClick,
  style,
}: WindowProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClick}
      className={`absolute shadow-2xl rounded-lg overflow-hidden transition-all duration-300 border border-white/30
        ${isActive ? 'z-50 scale-100' : 'z-40 scale-95 opacity-80'}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        minWidth: 'min(320px, 100%)',
        ...style,
      }}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-white/30 to-transparent border-b border-white/10 select-none cursor-move">
        <div className="flex items-center gap-2">
          <Icon size={16} className="text-white" />
          <span className="text-xs font-bold text-white drop-shadow-md tracking-tight uppercase">{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="p-2 hover:bg-white/10 active:bg-white/20 rounded min-w-[36px] min-h-[36px] flex items-center justify-center">
            <Minus size={16} className="text-white" />
          </button>
          <button className="p-2 hover:bg-white/10 active:bg-white/20 rounded min-w-[36px] min-h-[36px] flex items-center justify-center">
            <Maximize2 size={16} className="text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-2 hover:bg-red-500/80 active:bg-red-600/90 rounded transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
          >
            <X size={16} className="text-white" />
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-6 max-h-[65vh] sm:max-h-[75vh] overflow-y-auto text-white">
        {children}
      </div>
    </div>
  );
};
