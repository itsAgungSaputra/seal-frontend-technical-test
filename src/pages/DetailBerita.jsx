import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import PopularNewsCard from "../components/PopulerCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsHouse } from "react-icons/bs";

const comments = [
  {
    id: 1,
    name: "UJANG YUSMEIDI S.P., M.Agr.",
    date: "28 Mar 2024 11:15",
    comment:
      "Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?",
    avatar: "/images/speedwithmrsiu.jpeg",
  },
  {
    id: 2,
    name: "DINA RIKHA RIYANAWATI, S.Pd",
    date: "28 Mar 2024 11:15",
    comment: "saya mengunduh sertifikatnya kok juga belumbisa",
    avatar: "/images/rolando.jpg",
  },
];

const DetailNews = () => {
  const location = useLocation();
  const newsData = location.state;

  const [news, setNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://api-berita-indonesia.vercel.app/cnn/nasional"
        );
        const data = await response.json();
        setNews(data.data.posts);

        const popularResponse = await fetch(
          "https://api-berita-indonesia.vercel.app/cnn/terbaru"
        );
        const popularData = await popularResponse.json();
        setPopularNews(popularData.data.posts.slice(0, 3));
      } catch (error) {
        console.error("Error mengambil berita:", error);
      }
    };

    fetchNews();
  }, []);


if (!newsData) return <Navigate to="/" replace={true} />;

  return (
    <div className="container mx-auto p-5 mt-20">
      <nav className="flex text-sm text-gray-600 mb-20 gap-2">
        <a href="#" className="hover:underline flex gap-2 items-center">
          <BsHouse />
          Beranda
        </a>{" "}
        <a href="#" className="hover:underline flex gap-2 items-center">
          <MdKeyboardArrowRight />
          Nasional
        </a>{" "}
        <a href="#" className="hover:underline flex gap-2 items-center">
          <MdKeyboardArrowRight />
          Detail
        </a>
      </nav>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="max-w-4xl w-full md:w-2/3">
          <h1 className="text-2xl font-bold mb-4">{newsData.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            <a href="#" className="text-blue-500 hover:underline">
              Politik
            </a>{" "}
            &bull;{" "}
            {new Date(newsData.pubDate).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>
          <img
            src={newsData.thumbnail}
            alt="news-thumbnail"
            className="w-full rounded-md mb-4"
          />
          <p className="text-gray-700 leading-relaxed">
            {newsData.description}
          </p>

          <h1 className="text-2xl font-bold mb-4 border-blue-500 border-l-4 mt-10">
            <span>&nbsp;</span>Komentar
          </h1>
          <div className="w-full mx-auto p-4">
            <div className="mb-6 flex gap-2 items-start">
              <img
                src="/images/messidecul.jpg"
                alt="avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-auto">
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  placeholder="Apa yang ingin anda tanyakan?"
                  rows="4"
                ></textarea>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                  Kirim
                </button>
              </div>
            </div>

            <div>
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-start mb-4">
                  <img
                    src={comment.avatar}
                    alt="avatar"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold">{comment.name}</div>
                    <div className="text-xs text-gray-500">{comment.date}</div>
                    <p className="mt-1">{comment.comment}</p>
                    <button className="text-blue-500 text-sm mt-2">
                      Balas
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="popularnews mb-8 w-full md:w-1/3">
          <h1 className="text-2xl font-bold mb-4 border-blue-500 border-l-4">
            <span>&nbsp;</span>Berita Terpopuler
          </h1>
          <div className="grid grid-cols-1 gap-4">
            {popularNews.map((newsItem, index) => (
              <PopularNewsCard key={index} news={newsItem} index={index} />
            ))}
          </div>
        </section>
      </div>

      <section className="recomendation">
        <h1 className="text-2xl font-bold mb-4 border-blue-500 border-l-4">
          <span>&nbsp;</span>Rekomendasi Untuk Anda
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {news.slice(0, 3).map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailNews;
