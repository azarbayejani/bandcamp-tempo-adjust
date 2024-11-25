import React from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return themeContext.theme;
};
