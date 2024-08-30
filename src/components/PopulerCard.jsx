import React from "react";
import { extractCategory, formatDate } from "../utils/utils";
import { Link } from "react-router-dom";

const PopularNewsCard = ({ news, index }) => {
  const category = extractCategory(news.link);
  const rank = index + 1;  
  return (
    <Link
      to="/detailberita"
      state={news}
      className="flex overflow-hidden border-r border-gray-200 p-4 mb-12"
    >
      <div className="relative">
        <img
          src={news.thumbnail}
          alt={news.title}
          className="rounded-md w-96 h-32 object-cover"
        />
        <span className="absolute -top-4 -left-2 bg-gray-800 text-white text-sm font-bold p-2 rounded-full">
          {rank.toString().padStart(2)}
        </span>
      </div>
      <div className="flex flex-col justify-between pl-4">
        <h2 className="text-sm font-semibold mb-2">
          {news.title}
        </h2>
        <p className="text-xs text-gray-600 font-semibold">
          <span className="capitalize text-blue-500">{category}</span>{" "}
          <span className="text-gray-500">•</span> {formatDate(news.pubDate)}
        </p>
      </div>
    </Link>
  );
};

export default PopularNewsCard;
