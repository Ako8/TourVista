export type ThemeName = "light" | "dark" | "warm";

const THEME_STORAGE_KEY = "app-theme";

export function getStoredTheme(): ThemeName | null {
  const value = localStorage.getItem(THEME_STORAGE_KEY);
  if (value === "light" || value === "dark" || value === "warm") return value;
  return null;
}

export function setStoredTheme(theme: ThemeName): void {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function applyTheme(theme: ThemeName): void {
  const root = document.documentElement;
  // Reset classes
  root.classList.remove("dark", "theme-warm");
  switch (theme) {
    case "dark":
      root.classList.add("dark");
      break;
    case "warm":
      root.classList.add("theme-warm");
      break;
    case "light":
    default:
      // Light is default CSS variables on :root
      break;
  }
}

export function initTheme(): ThemeName {
  const stored = getStoredTheme();
  const initial: ThemeName = stored ?? "light";
  applyTheme(initial);
  return initial;
}


