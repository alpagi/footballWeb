"use client";

import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

const LeaguePage = ({ params }: { params: { name: string } }) => {
  const leagueName = decodeURIComponent(params.name);

  // Lig logosunu belirleme
  let leagueIcon = "⚽";
  switch (leagueName) {
    case "Worldcup Qatar 2022":
      leagueIcon = "🏆";
      break;
    case "Champions League":
      leagueIcon = "⚽";
      break;
    case "Premier League":
      leagueIcon = "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
      break;
    case "La Liga":
      leagueIcon = "🇪🇸";
      break;
    case "Ligue 1":
      leagueIcon = "🇫🇷";
      break;
  }

  return (
    <Layout>
      <div className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 rounded-lg">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 flex items-center justify-center text-2xl mr-3">
            {leagueIcon}
          </div>
          <h1 className="text-2xl font-bold">{leagueName}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Son Maçlar</h2>
            <div className="space-y-4">
              {[
                {
                  team1: "Arsenal",
                  team2: "Manchester City",
                  score1: 2,
                  score2: 1,
                  date: "23 Nis",
                },
                {
                  team1: "Liverpool",
                  team2: "Chelsea",
                  score1: 0,
                  score2: 0,
                  date: "22 Nis",
                },
                {
                  team1: "Tottenham",
                  team2: "Newcastle",
                  score1: 3,
                  score2: 2,
                  date: "21 Nis",
                },
                {
                  team1: "West Ham",
                  team2: "Leicester",
                  score1: 1,
                  score2: 1,
                  date: "20 Nis",
                },
              ].map((match, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400 w-16">
                      {match.date}
                    </span>
                    <span className="ml-2">{match.team1}</span>
                  </div>
                  <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-center min-w-[70px]">
                    {match.score1} - {match.score2}
                  </div>
                  <div className="ml-2 text-right flex-1">
                    <span>{match.team2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Sıralama</h2>
            <div className="space-y-2">
              {[
                { pos: 1, team: "Arsenal", points: 90 },
                { pos: 2, team: "Manchester City", points: 88 },
                { pos: 3, team: "Liverpool", points: 82 },
                { pos: 4, team: "Chelsea", points: 74 },
                { pos: 5, team: "Tottenham", points: 66 },
              ].map((team, index) => (
                <div
                  key={index}
                  className="flex items-center py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  <span className="w-8 text-center font-bold">{team.pos}</span>
                  <span className="flex-1">{team.team}</span>
                  <span className="font-bold">{team.points}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeaguePage;
