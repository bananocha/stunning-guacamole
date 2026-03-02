import { ArrowLeft } from 'lucide-react';
import { FileIcon } from '../ui/FileIcon';
import type { WindowName, NavState, FileSystemItem } from '../../types';

interface FileExplorerProps {
  windowId: WindowName;
  navState: NavState;
  onItemClick: (windowId: WindowName, item: FileSystemItem) => void;
  onGoBack: (windowId: WindowName) => void;
}

export const FileExplorer = ({ windowId, navState, onItemClick, onGoBack }: FileExplorerProps) => {
  if (navState.isFileView) {
    const file = navState.current[0];
    return (
      <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={() => onGoBack(windowId)}
          className="flex items-center gap-2 text-xs uppercase font-bold text-blue-200 hover:text-white active:text-white/90 transition-colors min-h-[44px] px-2 -ml-2 rounded-lg active:bg-white/10"
        >
          <ArrowLeft size={16} /> Назад
        </button>

        {file.type === 'text' ? (
          <div className="bg-white/5 p-6 rounded-lg border border-white/20 shadow-inner">
            <h2 className="text-xl font-bold mb-3 border-b border-white/10 pb-2 italic">
              {file.name}
            </h2>
            <p className="text-sm leading-relaxed text-blue-50 font-light whitespace-pre-line">{file.content}</p>
            {file.tech && (
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {file.tech.split(', ').map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-white/10 rounded text-[11px] sm:text-[9px] font-mono border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ) : file.type === 'image' ? (
          <div className="rounded-lg overflow-hidden border border-white/30 bg-black/40 shadow-2xl">
            <div className="bg-white/10 px-3 py-1 text-[9px] border-b border-white/10 flex justify-between">
              <span>IMAGE VIEWER</span>
              <span>100% Zoom</span>
            </div>
            <img src={file.url} alt="Preview" className="w-full h-auto object-cover max-h-[50vh]" />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {navState.path.length > 0 && (
        <button
          onClick={() => onGoBack(windowId)}
          className="flex items-center gap-2 text-xs uppercase font-bold text-blue-200 hover:text-white active:text-white/90 transition-colors min-h-[44px] px-2 -ml-2 rounded-lg active:bg-white/10"
        >
          <ArrowLeft size={16} /> Назад
        </button>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {navState.current.map((item) => (
          <FileIcon key={item.id} item={item} onClick={() => onItemClick(windowId, item)} />
        ))}
      </div>
    </div>
  );
};
