"use client";

import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { newsData, getRelatedNewsByTags } from "../../data/newsData";

const NewsDetailPage = ({ params }: { params: { id: string } }) => {
  const newsId = parseInt(params.id);
  const news = newsData.find((item) => item.id === newsId);

  if (!news) {
    return (
      <Layout>
        <div className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Haber bulunamadı</h1>
          <Link
            href="/news"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Tüm haberlere dön
          </Link>
        </div>
      </Layout>
    );
  }

  // Etiketlere göre ilgili haberleri al
  const relatedNews = getRelatedNewsByTags(newsId);

  return (
    <Layout>
      <div className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-lg">
        <Link
          href="/news"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Tüm haberlere dön
        </Link>

        <div className="rounded-lg bg-white dark:bg-gray-800 shadow-md overflow-hidden">
          <div className="h-72 bg-gray-200 dark:bg-gray-700 relative">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-yellow-600 dark:text-yellow-500 font-semibold">
                {news.category}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {news.date} • {news.author}
              </div>
            </div>

            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {news.title}
            </h1>

            <div className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {news.content}
            </div>

            {/* Etiketler */}
            <div className="flex flex-wrap gap-2 mb-8">
              {news.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {relatedNews.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  İlgili Haberler
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedNews.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="block"
                    >
                      <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                        <div className="h-32 bg-gray-200 dark:bg-gray-600 relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="text-sm font-medium text-gray-800 dark:text-white mb-2">
                            {item.title}
                          </h3>
                          <div className="flex flex-wrap gap-1">
                            {/* Ortak etiketleri vurgulama */}
                            {item.tags
                              .filter((tag) => news.tags.includes(tag))
                              .slice(0, 2)
                              .map((tag, index) => (
                                <span
                                  key={index}
                                  className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                                >
                                  #{tag}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetailPage;
