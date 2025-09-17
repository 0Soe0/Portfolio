import {Sun, Moon} from 'lucide-react';
import {cn} from '../lib/utils';
import { useTheme } from '../contexts/ThemeContext';

//Props to identify whether the toggle is for desktop or mobile
interface ThemeToggleProps {
  variant?: 'desktop' | 'mobile';
}

export const ThemeToggle = ({ variant = 'desktop' }: ThemeToggleProps) => {
  const { isDark, toggleTheme } = useTheme();

  if (variant === 'desktop') {
    return (
      <button 
        onClick={toggleTheme} 
        className={cn(
          "fixed max-sm:hidden top-2 right-5 z-50 p-2 rounded-full trasition-colors duration-300",
          "focus:outline-hidden"
        )}>
        {isDark ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-black' />}
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme} 
      className={cn(
        "p-2 rounded-full transition-colors duration-300",
        "focus:outline-none",
        "text-white/80 dark:text-foreground/80"
      )}>
      Change Theme
    </button>
  );
}
  