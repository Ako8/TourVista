import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { getStoredTheme, applyTheme } from "@/lib/theme";

// Apply theme as early as possible to avoid FOUC
const stored = (() => {
  try {
    return getStoredTheme();
  } catch {
    return null;
  }
})();
if (stored) {
  try {
    applyTheme(stored);
  } catch {}
}

createRoot(document.getElementById("root")!).render(<App />);
