// ThemeToggleButton.jsx
import { useTheme } from '../context/ThemeContext';
import { FaPalette } from 'react-icons/fa';

export default function ThemeToggleButton({ className = '' }) {
  const { theme, nextTheme } = useTheme();

  return (
    <button
      onClick={nextTheme}
      className={
        'p-3 w-12 h-12 rounded-full border-none bg-bg text-accent shadow ' +
        className
      }
      aria-label="Cambiar tema"
      title={`Tema actual: ${theme}`}
    >
      {/* ícono más grande usando text-2xl */}
      <FaPalette className="text-2xl" />
    </button>
  );
}
