import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BsCalendarEvent, BsArrowUpRight } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";

const Carousel = ({ category }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-berita-indonesia.vercel.app/cnn/${category}`
        );
        const data = await response.json();
        setSlides(data.data.posts.slice(0,5));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full mx-auto pt-20 mb-20">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 items-center"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className="p-4">
                <div className="bg-white rounded-lg overflow-hidden flex flex-row-reverse">
                  <img
                    src={slide.thumbnail}
                    alt={slide.title}
                    className="w-1/2 object-cover rounded-md aspect-[2/1] flex-1"
                  />
                  <div className="p-6 flex-1">
                    <h1 className="text-base font-semibold mb-2 text-gray-500">
                      Headline
                    </h1>
                    <h2 className="text-3xl font-semibold mb-2">
                      {slide.title}
                    </h2>
                    <p className="mt-4 text-gray-700 mb-4">
                      {slide.description}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <BsCalendarEvent />
                      {formatDate(slide.pubDate)}
                    </p>
                    <Link
                      to="/detailberita"
                      state={slide}
                      className="text-sm font-medium text-blue-500  flex items-center gap-2 hover:underline mt-4"
                    >
                      Baca Selengkapnya <BsArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
        <button
          onClick={prevSlide}
          className="bg-white text-gray-800 p-2 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <button
          onClick={nextSlide}
          className="bg-white text-gray-800 p-2 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div> */}

      <div className="text-center flex justify-center items-center space-x-4 font-medium">
        <button
          onClick={prevSlide}
          className="bg-white text-gray-800 p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <p className="text-sm text-gray-600 p-4">
          {currentSlide + 1} <span className="px-4">dari</span> {slides.length}
        </p>
        <button
          onClick={nextSlide}
          className="bg-white text-gray-800 p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

//   <div className="flex overflow-hidden border-r border-gray-200 p-4 mb-4 flex-row-reverse flex-shrink-0">
//                 <div className="relative">
//                   <img
//                     src="/images/banner3.jpg"
//                     alt="lorem"
//                     className="rounded-md w-full h-auto object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-between pl-4">
//                   <h1 className="text-xl font-semibold mb-2 line-clamp-2 text-gray-500">
//                     Headline
//                   </h1>
//                   <h1 className="text-3xl font-semibold mb-2 line-clamp-2">
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Doloribus, commodi mollitia sint expedita voluptatibus eos
//                     ipsum alias provident! Repellendus omnis facere repellat.
//                     In, rem. Numquam ipsum nostrum aliquid debitis ullam.
//                   </h1>
                //   <p className="text-xs text-gray-600 flex items-center gap-2">
                //     <FaCalendarDays />
                //     {new Date(slide.pubDate).toLocaleDateString()}
                //   </p>;
                //   <a
                //     href="#"
                //     className="text-xs text-blue-500  flex items-center gap-2"
                //   >
                //     Baca Selengkapnya <FaArrowRightLong />
                //   </a>
//                 </div>
//               </div>

export default Carousel;