import React from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: 'light',
});

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

export const useTheme = () => React.useContext(ThemeContext).theme;
