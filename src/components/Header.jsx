import { useEffect, useState } from "react";
import Moon from "../assets/moon.svg";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="py-6 bg-white shadow-shadow fixed top-0 w-full dark:bg-[#2B3844] z-10">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center px-[20px]">
        <h1 className="font-bold text-2xl text-[#111517] dark:text-white">
          Where in the world?
        </h1>
        <div className="flex items-center gap-2" onClick={toggleTheme}>
          <img src={Moon} alt="" />
          <h2
            className="dark:text-white
          "
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
