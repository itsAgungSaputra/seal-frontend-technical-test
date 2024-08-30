import React, { useEffect, useState } from "react";

import NewsCard from "../components/NewsCard";
import PopularNewsCard from "../components/PopulerCard";
import HeadlineCard from "../components/HeadlineCard";

import Pagination from "../components/Pagination";
import { Pagination as SwiperPagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/bannerslider.module.css";

const Home = () => {
  const [news, setNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(news.length / 8);

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
        // const sortedPopularNews = popularData.data.posts.sort((a, b) => {
        //   const interactionA = Number(a.comments || 0) + Number(a.views || 0);
        //   const interactionB = Number(b.comments || 0) + Number(b.views || 0);
        //   return interactionB - interactionA;
        // });
        setPopularNews(popularData.data.posts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    const fetchHeadline = async () => {
      try {
        const response = await fetch(
          "https://api-berita-indonesia.vercel.app/cnn/nasional"
        );
        const data = await response.json();
        setNews(data.data.posts);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    fetchHeadline();
  }, []);

  return (
    <main className="p-4">
      <HeadlineCard category="nasional" />
      {/* <section className="headline mb-8 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="">
            <h1 className="text-xl font-medium text-gray-700 mb-4">Headline</h1>
          </div>

          {news
            .filter((_, index) => index < 1)
            .map((item, index) => (
            ))}
        </div>
      </section> */}

      <section className="popularnews mb-8">
        <h1 className="text-2xl font-bold mb-4 border-blue-500 border-l-4">
          <span>&nbsp;</span>Berita Terpopuler
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {popularNews.map((newsItem, index) => (
            <PopularNewsCard key={index} news={newsItem} index={index} />
          ))}
        </div>
      </section>

      <section className="recomendation mb-20">
        <h1 className="text-2xl font-bold mb-4 border-blue-500 border-l-4">
          <span>&nbsp;</span>Rekomendasi Untuk Anda
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {news.slice((page - 1) * 8, page * 8).map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}
        </div>
        <div className="pagination flex justify-between items-center py-10">
          <p className="text-gray-500">
            Showing {(page - 1) * 8 + 1} to {page * 8} of {news.length} results
          </p>
          {news.length > 0 && (
            <Pagination
              currentPage={Math.max(1, Math.min(totalPages, page))}
              pagesToShow={2}
              totalPages={totalPages}
              onPageChange={(page) => setPage(page)}
            />
          )}
        </div>
      </section>

      <section className="BannerSlider pb-12">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[SwiperPagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/images/banner.png"
              alt="Banner"
              className="rounded-md mb-2 w-100 h-96 object-cover mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/banner.png"
              alt="Banner"
              className="rounded-md mb-2 w-100 h-96 object-cover mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/banner.png"
              alt="Banner"
              className="rounded-md mb-2 w-100 h-96 object-cover mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
};

export default Home;
