import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

type Theme = {
  isDarkMode: boolean;
  setIsDarkMode(value: boolean): void;
};

const ThemeContext = createContext<Theme | null>(null);

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "darkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: Boolean(isDarkMode), setIsDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThem() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("Theme context is being used outside of theme provider");
  return context;
}

export default ThemeContextProvider;
