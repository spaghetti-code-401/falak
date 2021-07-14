import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [glass, setGlass] = useState('glass');
  const [glass2, setGlass2] = useState('glass2');
  const [lightText, setLightText] = useState('');
  const [background, setBackground] = useState('background');
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [onLoad, setOnLoad] = useState(true);

  return (
    <ThemeContext.Provider
      value={{
        glass,
        setGlass,
        glass2,
        setGlass2,
        lightText,
        setLightText,
        background,
        setBackground,
        isDarkMode, 
        setIsDarkMode,
        onLoad, 
        setOnLoad
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
