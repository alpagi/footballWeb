import React from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const LiveMatch = () => {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 transition-colors duration-300">
      <div className="text-center mb-3">
        <div className="text-xs uppercase font-bold text-gray-500">
          Live Match
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-green-600 h-2 w-2 rounded-full mr-1"></div>
          <div className="text-sm text-green-600">62 : 24</div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-6">
        <div className="flex flex-col items-center">
          <div className="text-3xl mb-2 w-12 h-12 relative">
            <Image
              src={require("../assets/image/mexico.png")}
              alt="Mexico"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-sm text-gray-900 dark:text-white">Mexico</div>
        </div>

        <div className="mx-4 text-lg font-bold text-gray-900 dark:text-white">
          2 - 2
        </div>

        <div className="flex flex-col items-center">
          <div className="text-3xl mb-2 w-12 h-12 relative">
            <Image
              src={require("../assets/image/sweden.png")}
              alt="Sweden"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-sm text-gray-900 dark:text-white">Sweden</div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-center mb-2 text-sm text-gray-400">
            Shoot on Target
          </div>
          <div className="flex items-center text-sm">
            <div className="w-8 text-center text-gray-900 dark:text-white">
              7
            </div>
            <div className="flex-1 mx-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div className="w-8 text-center text-gray-900 dark:text-white">
              3
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-2 text-sm text-gray-400">Shoot</div>
          <div className="flex items-center text-sm">
            <div className="w-8 text-center text-gray-900 dark:text-white">
              12
            </div>
            <div className="flex-1 mx-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: "63%" }}
              ></div>
            </div>
            <div className="w-8 text-center text-gray-900 dark:text-white">
              7
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-2 text-sm text-gray-400">Fouls</div>
          <div className="flex items-center text-sm">
            <div className="w-8 text-center text-gray-900 dark:text-white">
              7
            </div>
            <div className="flex-1 mx-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div className="w-8 text-center text-gray-900 dark:text-white">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatch;
