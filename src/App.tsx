import { useState, useCallback } from 'react';
import { BootScreen } from './components/BootScreen';
import { Background } from './components/Background';
import { DesktopIcons } from './components/DesktopIcons';
import { Taskbar } from './components/Taskbar';
import { Window } from './components/ui/Window';
import { FileExplorer } from './components/windows/FileExplorer';
import { useWindowManager } from './hooks/useWindowManager';
import { useFileExplorer } from './hooks/useFileExplorer';
import { useClock } from './hooks/useClock';
import { FILE_SYSTEM, WINDOW_KEYS } from './constants/content';
import type { WindowName } from './types';

const App = () => {
  const [booted, setBooted] = useState(() => sessionStorage.getItem('booted') === '1');
  const { windows, minimized, activeWindow, toggleWindow, minimizeWindow, activateWindow, taskbarClick } = useWindowManager();
  const { navHistory, handleItemClick, goBack, resetNav } = useFileExplorer();
  const currentTime = useClock();

  const handleBootComplete = useCallback(() => {
    sessionStorage.setItem('booted', '1');
    setBooted(true);
  }, []);

  const handleToggleWindow = (name: WindowName) => {
    if (!windows[name]) resetNav(name);
    toggleWindow(name);
  };

  if (!booted) {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans selection:bg-blue-400/40">
      <Background />
      <DesktopIcons onToggleWindow={handleToggleWindow} />

      <div className="absolute inset-0 z-20 pointer-events-none p-2 sm:p-6 md:p-12 lg:p-20">
        <div className="relative w-full h-full pointer-events-auto">
          {WINDOW_KEYS.map((key, index) => {
            const section = FILE_SYSTEM[key];
            return (
              <Window
                key={key}
                title={section.title}
                icon={section.icon}
                isOpen={windows[key]}
                isMinimized={minimized[key]}
                onClose={() => handleToggleWindow(key)}
                onMinimize={() => minimizeWindow(key)}
                isActive={activeWindow === key}
                onClick={() => activateWindow(key)}
                style={{
                  top: `${2 + index * 3}%`,
                  left: `${2 + index * 2}%`,
                  width: 'calc(100% - 16px)',
                  maxWidth: '700px',
                  minHeight: '300px',
                }}
              >
                <FileExplorer
                  windowId={key}
                  navState={navHistory[key]}
                  onItemClick={handleItemClick}
                  onGoBack={goBack}
                />
              </Window>
            );
          })}
        </div>
      </div>

      <Taskbar
        windows={windows}
        minimized={minimized}
        activeWindow={activeWindow}
        onSetActiveWindow={taskbarClick}
        currentTime={currentTime}
      />
    </div>
  );
};

export default App;
