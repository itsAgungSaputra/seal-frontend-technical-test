import React from "react";
import { extractCategory, formatDate } from "../utils/utils";
import { Link } from "react-router-dom";

const PopularNewsCard = ({ news, index }) => {
  const category = extractCategory(news.link);
  const rank = index + 1;  
  return (
    <Link to="/detailberita" state={news} className="flex overflow-hidden border-r border-gray-200 p-4 mb-4">
      <div className="relative">
        <img
          src={news.thumbnail}
          alt={news.title}
          className="rounded-md w-full h-auto object-cover"
        />
        <span className="absolute top-0 left-0 bg-zinc-950 text-white text-sm font-bold p-1 rounded-full">
          {rank.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-col justify-between pl-4">
        <h2 className="text-sm font-semibold mb-2 line-clamp-2">
          {news.title}
        </h2>
        <p className="text-xs text-gray-600">
          <span className="capitalize text-blue-500">{category}</span>{" "}
          <span className="text-gray-500">•</span> {formatDate(news.pubDate)}
        </p>
      </div>
    </Link>
  );
};

export default PopularNewsCard;
