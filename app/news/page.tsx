"use client";

import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "../data/newsData";

const NewsPage = () => {
  return (
    <Layout>
      <div className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <span className="text-lg mr-2">📰</span>
          All News and Transfer Today
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`} className="block">
              <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] h-full">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs text-yellow-600 dark:text-yellow-500 font-semibold">
                      {item.category}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {item.content}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
