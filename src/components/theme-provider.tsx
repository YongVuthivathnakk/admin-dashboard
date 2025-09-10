import type { ThemeColors, ThemeMode } from "@/type";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = {
  mode: ThemeMode;
  color: ThemeColors;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: { mode: "light", color: "default" },
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = { mode: "light", color: "default" },
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [storedTheme, setStoredTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) return JSON.parse(saved) as Theme;
      } catch {
        return defaultTheme;
      }
    }
    return defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(storedTheme));
  }, [storedTheme, storageKey]);

  const value = {
    theme: storedTheme,
    setTheme: (theme: Theme) => {
      setStoredTheme(theme);
    },
  };

  if (storedTheme.mode === "system") {
    const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    return (
      <ThemeProviderContext.Provider {...props} value={value}>
        <div data-theme={`${storedTheme.color}-${systemMode}`}>{children}</div>
      </ThemeProviderContext.Provider>
    );
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <div
        className={`${storedTheme.mode}`}
        data-theme={`${storedTheme.color}-${storedTheme.mode}`}
      >
        {children}
      </div>
    </ThemeProviderContext.Provider>
  );
}

/**
 * Hook to get and set new theme throughout application
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
