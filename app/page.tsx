"use client";

import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MatchesSection from "./components/MatchesSection";
import LiveMatch from "./components/LiveMatch";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* Main content area */}
          <main className="flex-1 overflow-y-auto p-4">
            <MatchesSection />
          </main>

          {/* Right sidebar */}
          <aside className="w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 overflow-y-auto p-4 transition-colors duration-300">
            <LiveMatch />
          </aside>
        </div>
      </div>
    </div>
  );
}
