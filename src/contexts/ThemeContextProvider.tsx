import React, { useState } from 'react';

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextProps = {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
  assetsPath?: string;
};

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: ThemeType.LIGHT,
  changeTheme: () => {},
});

const ThemeContextProvider = (
  props: React.PropsWithChildren<{ assetsPath?: string }>
) => {
  const [theme, setTheme] = useState(ThemeType.LIGHT);

  const changeTheme = (value: ThemeType) => {
    setTheme(value);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, changeTheme, assetsPath: props.assetsPath }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
