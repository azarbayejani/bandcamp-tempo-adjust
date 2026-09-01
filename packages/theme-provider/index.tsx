import React from 'react';

type Theme = 'light' | 'dark';
type buttonStyle = 'rounded' | 'square';

interface ThemeContextValue {
  theme: Theme;
  buttonStyle: 'rounded' | 'square';
  isMobile: boolean;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

export const ThemeProvider = ({
  children,
  theme,
  buttonStyle = 'square',
  isMobile = false,
}: {
  children: React.ReactNode;
  theme: Theme;
  buttonStyle?: buttonStyle;
  isMobile?: boolean;
}) => {
  return (
    <ThemeContext.Provider value={{ theme, buttonStyle, isMobile }}>
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

export const useIsMobile = () => {
  const themeContext = React.useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error('useIsMobile must be used within a ThemeProvider');
  }

  return themeContext.isMobile;
};
