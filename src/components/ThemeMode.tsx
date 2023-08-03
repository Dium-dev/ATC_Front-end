'use client'
import { useTheme } from "next-themes";

export function ThemeModeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="group hover:text-primary "
    >
      {theme == "dark" ? "Light" : "Dark"}
    </button>
  );
}
