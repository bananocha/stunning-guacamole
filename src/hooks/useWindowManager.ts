import { useState } from 'react';
import type { WindowName } from '../types';

type WindowState = Record<WindowName, boolean>;

const INITIAL_WINDOWS: WindowState = {
  about: false,
  projects: false,
  infrastructure: false,
  legal: false,
};

export const useWindowManager = () => {
  const [windows, setWindows] = useState<WindowState>(INITIAL_WINDOWS);
  const [activeWindow, setActiveWindow] = useState<WindowName>('about');

  const toggleWindow = (name: WindowName) => {
    setWindows(prev => ({ ...prev, [name]: !prev[name] }));
    if (!windows[name]) setActiveWindow(name);
  };

  return { windows, activeWindow, toggleWindow, setActiveWindow };
};
