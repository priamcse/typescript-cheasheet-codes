import { createContext } from "react";
// import { theme } from "./theme";
const theme = {
  primary: {
    bg: "#000000",
    text: "#fff",
  },
  secondary: {
    bg: "#000000",
    text: "#fff",
  },
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};
export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
