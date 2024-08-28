import React from 'react';
import { extractCategory, formatDate } from '../utils/utils';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const category = extractCategory(news.link);

  return (
    <Link to="/detailberita" state={news} className="rounded-lg p-2 flex flex-col">
      <img
        src={news.thumbnail}
        alt={news.title}
        className="rounded-md mb-2 w-full h-auto object-cover"
        width={200}
        height={100}
      />
      <h2 className="text-sm font-bold break-words">{news.title}</h2>
      <p className="text-xs mt-1 flex items-center gap-2 text-gray-500">
        <span className="capitalize text-blue-500">{category}</span>{" "}
        <span className="text-gray-500">•</span> {formatDate(news.pubDate)}
      </p>
    </Link>
  );
};

export default NewsCard;
