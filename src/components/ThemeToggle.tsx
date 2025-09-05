import {useState, useEffect} from 'react';
import {Sun, Moon} from 'lucide-react';
import {cn} from '../lib/utils';

//Props to identify whether the toggle is for desktop or mobile
interface ThemeToggleProps {
  variant?: 'desktop' | 'mobile';
}

export const ThemeToggle = ({ variant = 'desktop' }: ThemeToggleProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //Checking the saved theme on local storage to remember it when reloading the page
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    else {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
      //localStorage.setItem('theme', 'light'); using this also works but doesnt make sense entirely bc 
      // the theme is already saved in local storage using the toggleTheme function
    }
  }, []);

  //On click event to change themes and save state in local storage
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark'); // ex: removing dark class from the html element (tailwind)
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  }

  if (variant === 'desktop') {
    return (
      <button 
        onClick={toggleTheme} 
        className={cn(
          "fixed max-sm:hidden top-2 right-5 z-50 p-2 rounded-full trasition-colors duration-300",
          "focus:outline-hidden"
        )}>
        {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-black' />}
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
  