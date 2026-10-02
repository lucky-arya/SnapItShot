import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
        theme === 'dark'
          ? 'text-cream-light/80 hover:text-cream bg-white/5 hover:bg-white/10 border border-white/10'
          : 'text-charcoal/80 hover:text-charcoal bg-black/5 hover:bg-black/10 border border-black/10'
      } ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
      ) : (
        <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
      )}
    </button>
  );
}
