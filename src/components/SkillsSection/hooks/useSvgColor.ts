import { useTheme } from '../../../contexts/ThemeContext';

export const useSvgColor = () => {
  const { isDark } = useTheme();

  const primary = isDark ? 'white' : 'black';
  const secondary = isDark ? 'black' : 'white';
  
  return { primary, secondary };
}
  