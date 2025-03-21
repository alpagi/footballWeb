"use client";

import React from "react";
import Layout from "../../components/Layout";

const ClubPage = ({ params }: { params: { name: string } }) => {
  const clubName = decodeURIComponent(params.name);

  // Takım rengini belirleme
  let clubIcon = "⚽";
  let clubColor = "bg-blue-600";

  switch (clubName) {
    case "Chelsea FC":
      clubIcon = "🔵";
      clubColor = "bg-blue-600";
      break;
    case "Manchester City":
      clubIcon = "🔵";
      clubColor = "bg-blue-500";
      break;
    case "Bayern Munchen":
      clubIcon = "🔴";
      clubColor = "bg-red-600";
      break;
  }

  return (
    <Layout>
      <div className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 rounded-lg">
        <div className="flex items-center mb-6">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${clubColor} mr-3`}
          >
            <span className="text-lg">{clubIcon}</span>
          </div>
          <h1 className="text-2xl font-bold">{clubName}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-6">
              <h2 className="text-lg font-semibold mb-4">Son Maçlar</h2>
              <div className="space-y-4">
                {[
                  {
                    opponent: "Arsenal",
                    score1: 2,
                    score2: 1,
                    date: "23 Nis",
                    homeAway: "H",
                    result: "W",
                  },
                  {
                    opponent: "Liverpool",
                    score1: 0,
                    score2: 2,
                    date: "16 Nis",
                    homeAway: "A",
                    result: "L",
                  },
                  {
                    opponent: "Tottenham",
                    score1: 3,
                    score2: 3,
                    date: "09 Nis",
                    homeAway: "H",
                    result: "D",
                  },
                  {
                    opponent: "Newcastle",
                    score1: 0,
                    score2: 1,
                    date: "02 Nis",
                    homeAway: "A",
                    result: "L",
                  },
                ].map((match, index) => (
                  <div
                    key={index}
                    className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3"
                  >
                    <span className="text-sm text-gray-500 dark:text-gray-400 w-16">
                      {match.date}
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      {match.homeAway === "H" ? "🏠" : "🛣️"}
                    </div>
                    <span className="ml-2 flex-1">{match.opponent}</span>
                    <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-center min-w-[60px]">
                      {match.score1} - {match.score2}
                    </div>
                    <div
                      className={`ml-3 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold
                      ${
                        match.result === "W"
                          ? "bg-green-500"
                          : match.result === "L"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {match.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Gelecek Maçlar</h2>
              <div className="space-y-4">
                {[
                  {
                    opponent: "Everton",
                    date: "30 Nis",
                    time: "16:00",
                    homeAway: "H",
                  },
                  {
                    opponent: "Bournemouth",
                    date: "07 May",
                    time: "13:30",
                    homeAway: "A",
                  },
                  {
                    opponent: "Brighton",
                    date: "14 May",
                    time: "15:00",
                    homeAway: "H",
                  },
                ].map((match, index) => (
                  <div
                    key={index}
                    className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3"
                  >
                    <span className="text-sm text-gray-500 dark:text-gray-400 w-16">
                      {match.date}
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      {match.homeAway === "H" ? "🏠" : "🛣️"}
                    </div>
                    <span className="ml-2 flex-1">{match.opponent}</span>
                    <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-center min-w-[60px]">
                      {match.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-6">
              <h2 className="text-lg font-semibold mb-4">Takım Bilgisi</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Kuruluş:
                  </span>
                  <span>1905</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Stadyum:
                  </span>
                  <span>Etihad Stadium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Kapasite:
                  </span>
                  <span>55,097</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Teknik Direktör:
                  </span>
                  <span>Pep Guardiola</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Liglerdeki Durumu</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <span>Premier League</span>
                  <span className="font-bold">2.</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <span>Şampiyonlar Ligi</span>
                  <span className="font-bold">Çeyrek Final</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <span>FA Cup</span>
                  <span className="font-bold">Yarı Final</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClubPage;
