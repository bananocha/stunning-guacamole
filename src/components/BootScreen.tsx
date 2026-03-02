import { useState, useEffect, useCallback } from 'react';
import { DoorClosed, Loader2 } from 'lucide-react';

const BOOT_STATUSES = [
  'Initializing BIOS...',
  'Loading Kernel...',
  'Starting DevOps Engine...',
  'Mounting AWS Infrastructure...',
  'Initializing Flutter UI...',
  'Loading Legal Compliance Modules...',
  'Welcome to Maximiv OS',
] as const;

interface BootScreenProps {
  onBootComplete: () => void;
}

export const BootScreen = ({ onBootComplete }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<string>(BOOT_STATUSES[0]);
  const [fading, setFading] = useState(false);

  const handleComplete = useCallback(() => {
    setFading(true);
    setTimeout(onBootComplete, 600);
  }, [onBootComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(handleComplete, 500);
          return 100;
        }
        const next = Math.min(prev + Math.random() * 15, 100);
        const idx = Math.floor((next / 100) * (BOOT_STATUSES.length - 1));
        setStatus(BOOT_STATUSES[idx]);
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [handleComplete]);

  return (
    <div
      className={`fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center font-sans transition-opacity duration-500 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Door icon with glow */}
      <div className="relative mb-12 animate-pulse">
        <div className="relative p-6 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full border border-blue-500/30">
          <DoorClosed
            size={80}
            className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]"
          />
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4 border border-white/5">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 transition-all duration-300"
          style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(37, 99, 235, 0.5)' }}
        />
      </div>

      {/* Status text */}
      <div className="text-white/40 text-[10px] font-mono tracking-widest uppercase flex items-center gap-2">
        <Loader2 size={12} className="animate-spin" />
        {status}
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 text-white/20 text-[8px] tracking-tighter uppercase">
        © 2026 Maximiv OS v.2.5 | Based in Vancouver, BC
      </div>
    </div>
  );
};
