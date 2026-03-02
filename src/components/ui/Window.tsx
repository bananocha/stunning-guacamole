import { useRef, useCallback, useEffect } from 'react';
import { Minus, Maximize2, X } from 'lucide-react';
import type { WindowProps } from '../../types';

export const Window = ({
  title,
  icon: Icon,
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  children,
  isActive,
  onClick,
  style,
}: WindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    hasMoved: false,
  });

  /* ── Drag: pointer down on title bar ── */
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    const el = windowRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    dragRef.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: rect.left,
      offsetY: rect.top,
      hasMoved: false,
    };

    el.style.transition = 'none';
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const d = dragRef.current;
    if (!d.isDragging) return;

    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;

    if (!d.hasMoved && Math.abs(dx) + Math.abs(dy) < 5) return;
    d.hasMoved = true;

    const el = windowRef.current;
    if (!el) return;

    const x = d.offsetX + dx;
    const y = Math.max(0, d.offsetY + dy); // prevent dragging above viewport
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.right = 'auto';
    el.style.bottom = 'auto';
  }, []);

  const handlePointerUp = useCallback(() => {
    dragRef.current.isDragging = false;
    const el = windowRef.current;
    if (el) el.style.transition = '';
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
  }, []);

  // Clean up listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      onPointerDown={onClick}
      className={`absolute shadow-2xl rounded-lg overflow-hidden border border-white/30 transition-all duration-300
        ${isMinimized ? 'scale-0 opacity-0 pointer-events-none' : ''}
        ${!isMinimized && isActive ? 'z-50 scale-100' : ''}
        ${!isMinimized && !isActive ? 'z-40 scale-[0.98] opacity-80' : ''}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        minWidth: 'min(320px, 100%)',
        ...style,
      }}
    >
      {/* Title bar — draggable */}
      <div
        onPointerDown={handlePointerDown}
        className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-white/30 to-transparent border-b border-white/10 select-none cursor-grab active:cursor-grabbing touch-none"
      >
        <div className="flex items-center gap-2">
          <Icon size={16} className="text-white" />
          <span className="text-xs font-bold text-white drop-shadow-md tracking-tight uppercase">{title}</span>
        </div>
        <div className="flex gap-1">
          {/* Minimize */}
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="p-2 rounded min-w-[36px] min-h-[36px] flex items-center justify-center
              hover:bg-yellow-400/30 active:bg-yellow-400/50 transition-colors group"
            title="Minimize"
          >
            <Minus size={16} className="text-white group-hover:text-yellow-200 transition-colors" />
          </button>
          {/* Maximize (decorative) */}
          <button
            className="p-2 rounded min-w-[36px] min-h-[36px] flex items-center justify-center
              hover:bg-green-400/30 active:bg-green-400/50 transition-colors group cursor-default"
            title="Maximize"
          >
            <Maximize2 size={16} className="text-white group-hover:text-green-200 transition-colors" />
          </button>
          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-2 rounded min-w-[36px] min-h-[36px] flex items-center justify-center
              hover:bg-red-500/80 active:bg-red-600/90 transition-colors group"
            title="Close"
          >
            <X size={16} className="text-white group-hover:text-red-100 transition-colors" />
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-6 max-h-[65vh] sm:max-h-[75vh] overflow-y-auto text-white">
        {children}
      </div>
    </div>
  );
};
