import React from "react";
import {
  MdDashboard,
  MdSportsFootball,
  MdLeaderboard,
  MdMovie,
  MdStarBorder,
  MdNewspaper,
} from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const leagues = [
  {
    name: "Champions League",
    icon: "⚽",
  },
  { name: "Türkiye Süper Lig", icon: "🇹🇷" },
];

const favoriteClubs = [
  { name: "Chelsea FC", icon: "🔵" },
  { name: "Manchester City", icon: "🔵" },
  { name: "Bayern Munchen", icon: "🔴" },
];

const Sidebar = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-colors duration-300">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          FutAPP
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          <Link href="/">
            <div className={`sidebar-item ${pathname === "/" ? "active" : ""}`}>
              <MdDashboard className="text-xl" />
              <span>Dashboard</span>
            </div>
          </Link>

          <Link href="/standings">
            <div
              className={`sidebar-item ${
                pathname === "/standings" ? "active" : ""
              }`}
            >
              <MdLeaderboard className="text-xl" />
              <span>Standings</span>
            </div>
          </Link>

          <Link href="/news">
            <div
              className={`sidebar-item ${pathname === "/news" ? "active" : ""}`}
            >
              <MdNewspaper className="text-xl" />
              <span>News</span>
            </div>
          </Link>
        </div>

        <div className="mt-4">
          <h3 className="uppercase text-xs text-gray-500 font-bold px-4 py-2">
            Football League
          </h3>
          <div className="px-3">
            {leagues.map((league, index) => (
              <Link
                key={index}
                href={`/league/${encodeURIComponent(league.name)}`}
              >
                <div
                  className={`sidebar-item ${
                    pathname === `/league/${encodeURIComponent(league.name)}`
                      ? "active"
                      : ""
                  }`}
                >
                  <div className="w-6 h-6 relative mr-1">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg">{league.icon}</span>
                    </div>
                  </div>
                  <span className="text-gray-900 dark:text-white">
                    {league.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="uppercase text-xs text-gray-500 font-bold px-4 py-2">
            Favorite Club
          </h3>
          <div className="px-3">
            {favoriteClubs.map((club, index) => (
              <Link key={index} href={`/club/${encodeURIComponent(club.name)}`}>
                <div
                  className={`sidebar-item ${
                    pathname === `/club/${encodeURIComponent(club.name)}`
                      ? "active"
                      : ""
                  }`}
                >
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
