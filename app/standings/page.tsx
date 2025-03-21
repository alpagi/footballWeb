"use client";

import React, { useState } from "react";
import Layout from "../components/Layout";
import { superLigData, laLigaData, serieAData } from "../data/leagueData";

const StandingsPage = () => {
  const [activeTab, setActiveTab] = useState("superlig");

  // Aktif sekmeye göre veri seçimi
  const getActiveData = () => {
    switch (activeTab) {
      case "superlig":
        return superLigData;
      case "laliga":
        return laLigaData;
      case "seriea":
        return serieAData;
      default:
        return superLigData;
    }
  };

  return (
    <Layout>
      <div className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Puan Durumu</h1>

        <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button
                onClick={() => setActiveTab("superlig")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "superlig"
                    ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                Türkiye Süper Lig
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setActiveTab("laliga")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "laliga"
                    ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                İspanya La Liga
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setActiveTab("seriea")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "seriea"
                    ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                İtalya Serie A
              </button>
            </li>
          </ul>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Takım</th>
                <th className="py-3 px-4 text-center">O</th>
                <th className="py-3 px-4 text-center">G</th>
                <th className="py-3 px-4 text-center">B</th>
                <th className="py-3 px-4 text-center">M</th>
                <th className="py-3 px-4 text-center">A</th>
                <th className="py-3 px-4 text-center">Y</th>
                <th className="py-3 px-4 text-center">Av</th>
                <th className="py-3 px-4 text-center">P</th>
              </tr>
            </thead>
            <tbody>
              {getActiveData().map((team, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 dark:border-gray-700"
                >
                  <td className="py-3 px-4">{team.pos}</td>
                  <td className="py-3 px-4 font-medium">{team.team}</td>
                  <td className="py-3 px-4 text-center">{team.p}</td>
                  <td className="py-3 px-4 text-center">{team.w}</td>
                  <td className="py-3 px-4 text-center">{team.d}</td>
                  <td className="py-3 px-4 text-center">{team.l}</td>
                  <td className="py-3 px-4 text-center">{team.gf}</td>
                  <td className="py-3 px-4 text-center">{team.ga}</td>
                  <td className="py-3 px-4 text-center">{team.gd}</td>
                  <td className="py-3 px-4 text-center font-bold">
                    {team.pts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default StandingsPage;
