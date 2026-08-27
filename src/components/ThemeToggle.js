import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[#6e6e73] transition hover:bg-black/5 dark:border-white/10 dark:text-[#c7c7cc] dark:hover:bg-white/10" aria-label={isDark ? "Use light theme" : "Use dark theme"}>
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
