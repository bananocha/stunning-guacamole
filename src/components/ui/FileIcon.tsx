import { Folder, FileImage, FileText } from 'lucide-react';
import type { FileSystemItem } from '../../types';

interface FileIconProps {
  item: FileSystemItem;
  onClick: () => void;
}

const ICON_MAP = {
  folder: { icon: Folder, color: 'text-blue-300' },
  image: { icon: FileImage, color: 'text-purple-300' },
  text: { icon: FileText, color: 'text-gray-200' },
} as const;

export const FileIcon = ({ item, onClick }: FileIconProps) => {
  const { icon: Icon, color } = ICON_MAP[item.type];

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group p-3 rounded-lg hover:bg-white/10 active:bg-white/20 active:scale-95 transition-all w-full min-h-[72px] min-w-[72px]"
    >
      <div className="p-2 transition-transform group-hover:scale-110">
        <Icon size={40} className={`${color} drop-shadow-lg`} />
      </div>
      <span className="text-[11px] sm:text-[10px] font-medium text-center break-words w-full drop-shadow-sm leading-tight">
        {item.name}
      </span>
    </button>
  );
};
