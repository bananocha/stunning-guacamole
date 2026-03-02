import { Monitor, Linkedin, Github, Clock } from 'lucide-react';
import { FILE_SYSTEM, SOCIAL_LINKS } from '../constants/content';
import type { WindowName } from '../types';

interface TaskbarProps {
  windows: Record<WindowName, boolean>;
  activeWindow: WindowName;
  onSetActiveWindow: (name: WindowName) => void;
  currentTime: Date;
}

export const Taskbar = ({ windows, activeWindow, onSetActiveWindow, currentTime }: TaskbarProps) => (
  <div className="absolute bottom-0 left-0 w-full h-12 z-50 flex items-center justify-between px-2 sm:px-4 bg-gradient-to-b from-white/20 to-black/60 border-t border-white/20 backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <button className="h-11 w-11 bg-blue-600 rounded-full shadow-lg shadow-blue-500/40 flex items-center justify-center hover:scale-110 transition-transform active:scale-95 border border-white/30 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent" />
        <Monitor size={22} className="text-white relative z-10" />
      </button>

      <div className="h-6 w-[1px] bg-white/20" />

      {(Object.entries(windows) as [WindowName, boolean][]).map(([name, isOpen]) => {
        if (!isOpen) return null;
        const Icon = FILE_SYSTEM[name]?.icon;
        if (!Icon) return null;
        return (
          <button
            key={name}
            onClick={() => onSetActiveWindow(name)}
            className={`h-10 px-2 sm:px-4 rounded flex items-center gap-2 border transition-all duration-300 min-w-[44px] ${
              activeWindow === name
                ? 'bg-white/20 border-white/40 sm:w-36 shadow-inner active:bg-white/30'
                : 'bg-transparent border-transparent opacity-50 active:opacity-80'
            }`}
          >
            <Icon size={16} className="text-white shrink-0" />
            {activeWindow === name && (
              <span className="hidden sm:block text-[10px] text-white font-bold uppercase truncate">{name}</span>
            )}
          </button>
        );
      })}
    </div>

    <div className="flex items-center gap-4 text-white">
      <div className="flex items-center gap-3 sm:gap-4 opacity-70">
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 -m-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors inline-flex items-center justify-center min-w-[44px] min-h-[44px]">
          <Linkedin size={18} className="hover:text-blue-300 transition-colors" />
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-2 -m-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors inline-flex items-center justify-center min-w-[44px] min-h-[44px]">
          <Github size={18} className="hover:text-gray-300 transition-colors" />
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 bg-black/20 px-2 sm:px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
        <div className="flex flex-col items-end leading-none">
          <span className="text-[10px] font-bold">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <span className="text-[8px] opacity-60 uppercase font-medium">
            {currentTime.toLocaleDateString([], { weekday: 'short' })}
          </span>
        </div>
        <Clock size={16} className="text-blue-400" />
      </div>
    </div>
  </div>
);
