import type { LucideIcon } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';

/* ── Window system ── */

export type WindowName = 'about' | 'projects' | 'infrastructure' | 'legal';

export interface WindowProps {
  title: string;
  icon: LucideIcon;
  isOpen: boolean;
  isMinimized: boolean;
  onClose: () => void;
  onMinimize: () => void;
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
  style?: CSSProperties;
}

/* ── Desktop icons ── */

export interface AppIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

/* ── File system explorer ── */

export interface FileSystemTextItem {
  id: string;
  name: string;
  type: 'text';
  content: string;
  tech?: string;
}

export interface FileSystemImageItem {
  id: string;
  name: string;
  type: 'image';
  url: string;
}

export interface FileSystemFolderItem {
  id: string;
  name: string;
  type: 'folder';
  files: FileSystemItem[];
}

export type FileSystemItem = FileSystemTextItem | FileSystemImageItem | FileSystemFolderItem;

export interface FileSystemSection {
  title: string;
  icon: LucideIcon;
  root: FileSystemItem[];
}

export interface NavState {
  path: FileSystemItem[][];
  current: FileSystemItem[];
  isFileView?: boolean;
}
