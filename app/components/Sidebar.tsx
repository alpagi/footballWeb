import React from "react";
import {
  MdDashboard,
  MdSportsFootball,
  MdLeaderboard,
  MdMovie,
  MdNewspaper,
  MdStarBorder,
} from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const leagues = [
  {
    name: "Worldcup Qatar 2022",
    icon: "🏆",
  },
  {
    name: "Champions League",
    icon: "⚽",
  },
  { name: "Premier League", icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { name: "La Liga", icon: "🇪🇸" },
  { name: "Ligue 1", icon: "🇫🇷" },
];

const favoriteClubs = [
  { name: "Chelsea FC", icon: "🔵" },
  { name: "Manchester City", icon: "🔵" },
  { name: "Bayern Munchen", icon: "🔴" },
];

const Sidebar = () => {
  const { theme } = useTheme();

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-colors duration-300">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          FutAPP
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          <div className="sidebar-item active">
            <MdDashboard className="text-xl" />
            <span>Dashboard</span>
          </div>

          <div className="sidebar-item">
            <MdSportsFootball className="text-xl" />
            <span>Live Football</span>
          </div>

          <div className="sidebar-item">
            <MdLeaderboard className="text-xl" />
            <span>Standings</span>
          </div>

          <div className="sidebar-item">
            <MdMovie className="text-xl" />
            <span>Highlights</span>
          </div>

          <div className="sidebar-item">
            <MdNewspaper className="text-xl" />
            <span>News</span>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="uppercase text-xs text-gray-500 font-bold px-4 py-2">
            Football League
          </h3>
          <div className="px-3">
            {leagues.map((league, index) => (
              <div key={index} className="sidebar-item">
                <div className="w-6 h-6 relative mr-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg">{league.icon}</span>
                  </div>
                </div>
                <span className="text-gray-900 dark:text-white">
                  {league.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="uppercase text-xs text-gray-500 font-bold px-4 py-2">
            Favorite Club
          </h3>
          <div className="px-3">
            {favoriteClubs.map((club, index) => (
              <div key={index} className="sidebar-item">
                <div className="w-6 h-6 relative mr-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg">{club.icon}</span>
                  </div>
                </div>
                <span className="text-gray-900 dark:text-white">
                  {club.name}
                </span>
                <MdStarBorder className="ml-auto text-yellow-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
