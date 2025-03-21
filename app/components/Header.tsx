import React from "react";
import {
  MdSearch,
  MdNotifications,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-md py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <MdSearch className="absolute left-3 top-2.5 text-gray-400" />
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md">
          Go Premium
        </button>

        <div className="relative">
          <MdNotifications className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        <button
          onClick={toggleTheme}
          className="text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>

        <div className="h-8 w-8 rounded-full overflow-hidden">
          <Image
            src={require("../assets/image/avatar.jpg")}
            alt="User Profile"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
