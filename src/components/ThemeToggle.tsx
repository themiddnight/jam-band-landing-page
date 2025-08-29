'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';
import DropdownMenu, { DropdownItem } from './DropdownMenu';

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
    );
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4 text-gray-900 dark:text-gray-100" />;
      case 'dark':
        return <Moon className="w-4 h-4 text-gray-900 dark:text-gray-100" />;
      case 'system':
        return <Monitor className="w-4 h-4 text-gray-900 dark:text-gray-100" />;
      default:
        return <Monitor className="w-4 h-4 text-gray-900 dark:text-gray-100" />;
    }
  };

  const themeItems: DropdownItem[] = [
    {
      label: 'Light',
      icon: <Sun className="w-4 h-4" />,
      onClick: () => handleThemeChange('light'),
      active: theme === 'light',
      activeClassName: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      label: 'Dark',
      icon: <Moon className="w-4 h-4" />,
      onClick: () => handleThemeChange('dark'),
      active: theme === 'dark',
      activeClassName: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
    },
    {
      label: 'System',
      icon: <Monitor className="w-4 h-4" />,
      onClick: () => handleThemeChange('system'),
      active: theme === 'system',
      activeClassName: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
    }
  ];

  return (
    <DropdownMenu
      trigger={
        <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
          {getThemeIcon()}
        </div>
      }
      items={themeItems}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onClose={() => setIsOpen(false)}
      anchorPosition="bottom-right"
      offset={{ x: 0, y: 8 }}
      dropdownClassName="w-40"
    />
  );
} 