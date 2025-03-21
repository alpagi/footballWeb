import React from "react";
import Image from "next/image";

const news = [
  {
    id: 1,
    title: "Here Are The Top 100 Players And Managers",
    date: "11 Oct 06:00 AM",
    image: require("../assets/image/news-1.jpg"),
  },
  {
    id: 2,
    title: "Results And Scores From The Premier League...!!",
    date: "10 Oct 06:00 PM",
    image: require("../assets/image/news-2.jpg"),
  },
  {
    id: 3,
    title: "Here Are The Top 100 Players And Managers",
    date: "11 Oct 06:00 AM",
    image: require("../assets/image/news-3.jpg"),
  },
];

const NewsSection = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Last News</h2>

      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.id} className="bg-sidebar rounded-lg overflow-hidden">
            <div className="h-24 bg-gray-700 relative">
              <Image
                src={item.image}
                alt={item.title}
                width={240}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
