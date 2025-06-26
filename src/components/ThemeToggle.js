import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
  onClick={toggleTheme}
  className="p-3 rounded-xl bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm transition-all duration-300 hover:scale-105"
  aria-label="Toggle theme"
>
  {isDark ? (
    <Sun className="w-5 h-5 text-amber-500" />
  ) : (
    <Moon className="w-5 h-5 text-slate-600" />
  )}
</button>
  );
};

export default ThemeToggle;