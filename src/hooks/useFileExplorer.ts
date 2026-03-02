import { useState } from 'react';
import type { WindowName, FileSystemItem, NavState } from '../types';
import { FILE_SYSTEM } from '../constants/content';

type NavHistoryState = Record<WindowName, NavState>;

const buildInitialNav = (): NavHistoryState => {
  const entries = (Object.keys(FILE_SYSTEM) as WindowName[]).map((key) => [
    key,
    { path: [] as FileSystemItem[][], current: FILE_SYSTEM[key].root },
  ]);
  return Object.fromEntries(entries) as NavHistoryState;
};

export const useFileExplorer = () => {
  const [navHistory, setNavHistory] = useState<NavHistoryState>(buildInitialNav);

  const resetNav = (windowId: WindowName) => {
    setNavHistory((prev) => ({
      ...prev,
      [windowId]: { path: [], current: FILE_SYSTEM[windowId].root },
    }));
  };

  const handleItemClick = (windowId: WindowName, item: FileSystemItem) => {
    if (item.type === 'folder') {
      setNavHistory((prev) => ({
        ...prev,
        [windowId]: {
          path: [...prev[windowId].path, prev[windowId].current],
          current: item.files,
        },
      }));
    } else {
      setNavHistory((prev) => ({
        ...prev,
        [windowId]: {
          path: [...prev[windowId].path, prev[windowId].current],
          current: [item],
          isFileView: true,
        },
      }));
    }
  };

  const goBack = (windowId: WindowName) => {
    setNavHistory((prev) => {
      const newPath = [...prev[windowId].path];
      const lastState = newPath.pop();
      return {
        ...prev,
        [windowId]: {
          path: newPath,
          current: lastState || FILE_SYSTEM[windowId].root,
          isFileView: false,
        },
      };
    });
  };

  return { navHistory, handleItemClick, goBack, resetNav };
};
