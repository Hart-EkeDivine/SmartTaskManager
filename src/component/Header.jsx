import { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true" || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Smart Task & Productivity Manager
      </h1>

      <button
        onClick={toggleDarkMode}
        className="px-3 py-1 text-gray-800 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
