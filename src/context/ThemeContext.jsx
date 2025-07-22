import { createContext, useContext, useEffect, useState } from 'react';

// Temas disponibles (en el orden que los iremos ciclando)
const THEMES = ['temaA', 'temaB', 'temaC', 'temaD'];

const ThemeContext = createContext({
  theme: 'temaA',
  setTheme: () => {},
  nextTheme: () => {},
});

export function ThemeProvider({ children }) {
  // Lee el tema guardado o usa temaA
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'temaA'
  );

  // Cada vez que cambie, actualiza <html data-theme="..."> y guarda en LS
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función que salta al siguiente tema del array
  const nextTheme = () => {
    const idx = THEMES.indexOf(theme);
    const next = THEMES[(idx + 1) % THEMES.length];
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, nextTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook de comodidad
export const useTheme = () => useContext(ThemeContext);
