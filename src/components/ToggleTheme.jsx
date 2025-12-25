import React, { useEffect, useState } from "react";
import "../styles/components/ToggleTheme.css";

const THEME_KEY = "theme";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved) return saved;
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
    } catch (e) {
      // ignore and fallback
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const isDark = theme === "dark";
  const title = isDark ? "Switch to light theme" : "Switch to dark theme";
  const icon = isDark ? "☀️" : "🌙";

  return (
    <div className="toggle-theme">
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-pressed={isDark}
        aria-label={title}
        title={title}
        type="button"
      >
        {icon}
      </button>
    </div>
  );
};

export default ToggleTheme;
