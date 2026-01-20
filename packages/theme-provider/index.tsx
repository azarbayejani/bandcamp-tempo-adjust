import React from 'react';

type Theme = 'light' | 'dark';
type buttonStyle = 'rounded' | 'square';

interface ThemeContextValue {
  theme: Theme;
  buttonStyle: 'rounded' | 'square';
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

export const ThemeProvider = ({
  children,
  theme,
  buttonStyle = 'square',
}: {
  children: React.ReactNode;
  theme: Theme;
  buttonStyle?: buttonStyle;
}) => {
  return (
    <ThemeContext.Provider value={{ theme, buttonStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return themeContext.theme;
};

export const useButtonStyle = () => {
  const themeContext = React.useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error('useButtonStyle must be used within a ThemeProvider');
  }

  return themeContext.buttonStyle;
};
