"use client";

import React from "react";
import { MdSearch } from "react-icons/md";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const daysOfWeek = [
  { day: "Wednesday", date: "09 Aug" },
  { day: "Yesterday", date: "10 Aug" },
  { day: "Today", date: "11 Aug", isActive: true },
  { day: "Tomorrow", date: "12 Aug" },
  { day: "Sunday", date: "13 Aug" },
  { day: "Monday", date: "14 Aug" },
];

const matches = [
  {
    tournament: "World - FIFA Women's World Cup",
    phase: "Quarter Finals",
    tournamentImage: require("../assets/image/fifa-womens.png"),
    matches: [
      {
        time: "12:30",
        team1: "Argentina",
        team1Flag: require("../assets/image/argentina.png"),
        score1: "1",
        team2: "Italy",
        team2Flag: require("../assets/image/italy.png"),
        score2: "2",
        isLive: true,
      },
      {
        time: "14:30",
        team1: "Portugal",
        team1Flag: require("../assets/image/portugal.png"),
        score1: "2",
        team2: "Belgium",
        team2Flag: require("../assets/image/belgium.png"),
        score2: "3",
      },
      {
        time: "21:45",
        team1: "Ghana",
        team1Flag: require("../assets/image/ghana.png"),
        score1: "1",
        team2: "Brazil",
        team2Flag: require("../assets/image/brazil.png"),
        score2: "3",
      },
      {
        time: "22:00",
        team1: "Uruguay",
        team1Flag: require("../assets/image/uruguay.png"),
        score1: "2",
        team2: "Poland",
        team2Flag: require("../assets/image/poland.png"),
        score2: "2",
      },
      {
        time: "22:00",
        team1: "Spanish",
        team1Flag: require("../assets/image/spain.png"),
        score1: "3",
        team2: "Czech",
        team2Flag: require("../assets/image/czech.png"),
        score2: "3",
      },
    ],
  },
  {
    tournament: "World - FIFA Women's World Cup",
    phase: "Quarter Finals",
    tournamentImage: require("../assets/image/fifa-womens.png"),
    matches: [
      {
        time: "12:30",
        team1: "Argentina",
        team1Flag: require("../assets/image/argentina.png"),
        score1: "1",
        team2: "Italy",
        team2Flag: require("../assets/image/italy.png"),
        score2: "2",
        isLive: true,
      },
      {
        time: "14:30",
        team1: "Portugal",
        team1Flag: require("../assets/image/portugal.png"),
        score1: "2",
        team2: "Belgium",
        team2Flag: require("../assets/image/belgium.png"),
        score2: "3",
      },
      {
        time: "21:45",
        team1: "Ghana",
        team1Flag: require("../assets/image/ghana.png"),
        score1: "1",
        team2: "Brazil",
        team2Flag: require("../assets/image/brazil.png"),
        score2: "3",
      },
      {
        time: "21:45",
        team1: "Uruguay",
        team1Flag: require("../assets/image/uruguay.png"),
        score1: "2",
        team2: "Poland",
        team2Flag: require("../assets/image/poland.png"),
        score2: "2",
      },
      {
        time: "22:00",
        team1: "Spanish",
        team1Flag: require("../assets/image/spain.png"),
        score1: "3",
        team2: "Czech",
        team2Flag: require("../assets/image/czech.png"),
        score2: "3",
      },
    ],
  },
];

const MatchesSection = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-2">
          <div className="flex items-center bg-gray-900 dark:bg-gray-800 bg-opacity-40 rounded-full px-2 py-1">
            <div className="text-xs text-white bg-red-600 px-2 py-0.5 rounded-full mr-2">
              Live
            </div>
            <div className="text-gray-300 text-sm">2</div>
          </div>
        </div>

        <div className="flex items-center">
          <button className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-md text-sm flex items-center transition-colors">
            <MdSearch className="mr-1" />
            Search For Matches
          </button>
          <button className="ml-2 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 text-blue-400 px-3 py-1 rounded-md text-sm border border-blue-400 transition-colors">
            All Matches
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-4 py-2 rounded-md cursor-pointer ${
                day.isActive
                  ? "bg-blue-600"
                  : "bg-gray-200 dark:bg-gray-800 bg-opacity-50 hover:bg-opacity-70"
              }`}
            >
              <div className="text-center">
                <div className="text-xs text-gray-400">{day.day}</div>
                <div className="text-sm font-medium text-gray-800 dark:text-white">
                  {day.date}
                </div>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 px-4 py-2 bg-transparent text-blue-400 border border-blue-400 rounded-md flex items-center justify-center">
            <span className="text-sm">View Calendar</span>
          </div>
        </div>
      </div>

      {matches.map((tournament, tIndex) => (
        <div key={tIndex} className="mb-6">
          <div className="mb-2 flex items-center">
            <div className="mr-2 w-6 h-6 relative">
              <Image
                src={tournament.tournamentImage}
                alt={tournament.tournament}
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-800 dark:text-white">
                {tournament.tournament}
              </div>
              <div className="text-xs text-gray-400">{tournament.phase}</div>
            </div>
          </div>

          {tournament.matches.map((match, mIndex) => (
            <div key={mIndex} className="match-card">
              <div className="flex items-center">
                <div className="w-12 text-center text-sm text-gray-400">
                  {match.time}
                </div>

                <div className="flex-1 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 relative">
                      <Image
                        src={match.team1Flag}
                        alt={match.team1}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-sm text-gray-800 dark:text-white">
                      {match.team1}
                    </div>
                  </div>

                  <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded flex items-center">
                    <div className="text-sm font-medium text-gray-800 dark:text-white">
                      {match.score1}
                    </div>
                    <span className="mx-1 text-xs text-gray-500">-</span>
                    <div className="text-sm font-medium text-gray-800 dark:text-white">
                      {match.score2}
                    </div>
                    {match.isLive && (
                      <div className="ml-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="text-sm text-gray-800 dark:text-white">
                      {match.team2}
                    </div>
                    <div className="w-6 h-6 relative">
                      <Image
                        src={match.team2Flag}
                        alt={match.team2}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatchesSection;
