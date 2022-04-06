import React from 'react';

export const themes = {
    light: {
      foreground: '#262526',
      background: '#F4EDEA',
    },
    dark: {
      foreground: '#F4EDEA',
      background: '#262526',
    },
  };
  
export const ThemeContext = React.createContext(
    themes.light // значение по умолчанию
);