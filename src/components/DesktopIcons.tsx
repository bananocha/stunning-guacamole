import { AppIcon } from './ui/AppIcon';
import { FILE_SYSTEM, WINDOW_KEYS } from '../constants/content';
import type { WindowName } from '../types';

interface DesktopIconsProps {
  onToggleWindow: (name: WindowName) => void;
}

export const DesktopIcons = ({ onToggleWindow }: DesktopIconsProps) => (
  <div className="relative z-10 p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 w-fit h-full">
    {WINDOW_KEYS.map((key) => (
      <AppIcon
        key={key}
        icon={FILE_SYSTEM[key].icon}
        label={FILE_SYSTEM[key].title.split(': ')[1] ?? FILE_SYSTEM[key].title}
        onClick={() => onToggleWindow(key)}
      />
    ))}
  </div>
);
