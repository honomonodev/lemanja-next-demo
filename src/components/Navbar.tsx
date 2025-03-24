"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Check stored theme in localStorage on mount and apply it
  useEffect(() => {
    // Get stored theme preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDark(storedTheme === "dark");
      // Apply the dark mode class on the <html> element based on the stored theme
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
      console.log("Initial theme from localStorage:", storedTheme); // Log initial theme
    } else {
      // If no theme is saved, check system preference
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDarkMode);
      document.documentElement.classList.toggle("dark", prefersDarkMode);
      console.log("No theme in localStorage. Using system preference:", prefersDarkMode ? "dark" : "light");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDark ? "dark" : "light";  // Toggle theme
    console.log("Toggling dark mode, new theme:", newTheme); // Log the theme toggle action
    setIsDark(!isDark);  // Update state

    // Apply the dark class based on the new theme (after state update)
    if (!isDark) {
      document.documentElement.classList.add("dark");
      console.log("Dark mode applied"); // Log when dark mode is applied
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Light mode applied"); // Log when light mode is applied
    }

    localStorage.setItem("theme", newTheme); // Store the theme in localStorage
    console.log("Stored theme in localStorage:", newTheme); // Log the theme saved to localStorage
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo or Name */}
        <Link href="/" className="text-xl font-bold text-sky-700">
          🌊
        </Link>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="text-gray-800 dark:text-white"
          aria-label="Toggle dark mode"
        >
          {isDark ? "🌙" : "🌞"} {/* Switch between moon and sun icons */}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-gray-800 focus:outline-none text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Menu links */}
        <nav
          className={`${isOpen ? "block" : "hidden"} sm:flex space-x-4 items-center`}
        >
          <Link href="#about" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
            Sobre mi
          </Link>
          <Link href="#projects" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
            Projectes
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
            Contacte
          </Link>
        </nav>
      </div>
    </header>
  );
}
