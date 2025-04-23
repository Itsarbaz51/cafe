import React, { useRef, useEffect, useState } from "react";
import CoffeeNewsSection, { newsItems as originalNewsItems } from "../components/CoffeeNewsCard/CoffeeNewsCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function News() {
  const sliderRef = useRef(null);
  const scrollAmount = 300;

  const [newsItems, setNewsItems] = useState([...originalNewsItems]);

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollPos = container.scrollLeft + container.offsetWidth;
    const threshold = container.scrollWidth - 0;

    // Near end? Append more items
    if (scrollPos >= threshold) {
      setNewsItems((prev) => [...prev, ...originalNewsItems]);
    }
  };

  return (
    <div>
      <div className="relative w-full py-12" >
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 text-black dark:text-white p-3 shadow rounded-full cursor-pointer"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 text-black dark:text-white p-3 shadow rounded-full cursor-pointer"
        >
          <IoIosArrowForward />
        </button>

        {/* Scrollable Items */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex space-x-6 px-20 overflow-x-hidden scroll-smooth"
          role="region"
          aria-label="Coffee News Carousel"
          tabIndex="0"
        >
          {newsItems.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="flex-shrink-0 w-[15rem] sm:w-[25rem] md:w-[25rem] h-[15rem] sm:h-[25rem] md:h-[25rem] overflow-y-hidden hover:scale-95 duration-700 cursor-pointer relative"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="rounded-2xl w-full h-full object-cover"
              />
              <div className="p-4 absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl w-full">
                <p className="text-sm text-gray-100 mb-1">{item.date}</p>
                <h3 className="font-semibold text-lg md:text-3xl text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CoffeeNewsSection />
    </div>
  );
}

export default News;