import { useState } from 'react';
import type { WindowName } from '../types';

type WindowState = Record<WindowName, boolean>;
type MinimizedState = Record<WindowName, boolean>;

const INITIAL_WINDOWS: WindowState = {
  about: false,
  projects: false,
  infrastructure: false,
  legal: false,
};

const INITIAL_MINIMIZED: MinimizedState = {
  about: false,
  projects: false,
  infrastructure: false,
  legal: false,
};

export const useWindowManager = () => {
  const [windows, setWindows] = useState<WindowState>(INITIAL_WINDOWS);
  const [minimized, setMinimized] = useState<MinimizedState>(INITIAL_MINIMIZED);
  const [activeWindow, setActiveWindow] = useState<WindowName>('about');

  const toggleWindow = (name: WindowName) => {
    setWindows(prev => ({ ...prev, [name]: !prev[name] }));
    setMinimized(prev => ({ ...prev, [name]: false }));
    if (!windows[name]) setActiveWindow(name);
  };

  const minimizeWindow = (name: WindowName) => {
    setMinimized(prev => ({ ...prev, [name]: true }));
  };

  const restoreWindow = (name: WindowName) => {
    setMinimized(prev => ({ ...prev, [name]: false }));
    setActiveWindow(name);
  };

  const handleTaskbarClick = (name: WindowName) => {
    // Clicking taskbar tab: if minimized → restore; if active → minimize; else → activate
    if (minimized[name]) {
      restoreWindow(name);
    } else if (activeWindow === name) {
      minimizeWindow(name);
    } else {
      setActiveWindow(name);
    }
  };

  const activateWindow = (name: WindowName) => {
    // Clicking inside a window: just bring to front, never minimize
    if (activeWindow !== name) {
      setActiveWindow(name);
    }
  };

  return { windows, minimized, activeWindow, toggleWindow, minimizeWindow, activateWindow, taskbarClick: handleTaskbarClick };
};
