import { MdDarkMode } from "react-icons/md";
import { BiSun } from "react-icons/bi";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
        setIsDarkMode(storedTheme === "dark");
      }
    }
  }, []);

  const toggleDark = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setIsDarkMode(newTheme === "dark");

    // Check if window is defined (client-side) before using localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div onClick={toggleDark}>
      {isDarkMode ? (
        <div className="flex items-center justify-center  gap-2 cursor-pointer">
          <BiSun className="h-8 w-8" />
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2  cursor-pointer">
          <MdDarkMode className="text-black dark:text-white h-8 w-8" />
        </div>
      )}
    </div>
  );
};

export default DarkMode;
