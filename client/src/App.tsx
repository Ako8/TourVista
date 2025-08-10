import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import { useEffect, useState } from "react";
import { applyTheme, getStoredTheme, initTheme, setStoredTheme, type ThemeName } from "@/lib/theme";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeName>("light");

  useEffect(() => {
    const initial = initTheme();
    setTheme(initial);
  }, []);

  const handleChange = (value: ThemeName) => {
    setTheme(value);
    applyTheme(value);
    setStoredTheme(value);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] glassmorphism rounded-xl">
      <div className="flex items-center gap-2 p-2">
        <button
          onClick={() => handleChange("light")}
          className={`px-3 py-1.5 rounded-lg text-sm border ${
            theme === "light" ? "bg-foreground/10 border-foreground/20" : "hover:bg-foreground/5"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => handleChange("dark")}
          className={`px-3 py-1.5 rounded-lg text-sm border ${
            theme === "dark" ? "bg-foreground/10 border-foreground/20" : "hover:bg-foreground/5"
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => handleChange("warm")}
          className={`px-3 py-1.5 rounded-lg text-sm border ${
            theme === "warm" ? "bg-foreground/10 border-foreground/20" : "hover:bg-foreground/5"
          }`}
        >
          Warm
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ThemeSwitcher />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
