import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Hero() {
  const rawImages = [
    {
      img: "https://framerusercontent.com/images/wGH7yhEM7Dvwg5tG7oiMVQd0M.png",
    },
    {
      img: "https://framerusercontent.com/images/ffAQuLErAZ9FhPrK3M7QLPo5g.png",
    },
    {
      img: "https://framerusercontent.com/images/rgN0P1vQKsq9ZG5BJOPaR9KY.png",
    },
    {
      img: "https://framerusercontent.com/images/PRDfIQEwfBAD6WhfpVujpWW5c.png",
    },
    {
      img: "https://framerusercontent.com/images/HxZ5ZF3EmNZV8ft3wsqxeOgQE.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + rawImages.length) % rawImages.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % rawImages.length);
  };

  return (
    <div className="relative w-full flex items-center justify-center sm:py-10">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute z-40 left-4 cursor-pointer p-3 bg-white rounded-full shadow-md text-2xl hover:scale-110 transition-transform"
      >
        <IoIosArrowBack />
      </button>

      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full  h-[20rem] sm:h-[25rem]">
        {rawImages.map((image, index) => {
          const position =
            (index - currentIndex + rawImages.length) % rawImages.length;

          let baseStyle =
            "absolute transition-all duration-700 ease-in-out";
          let transformStyle = "";

          if (position === 0) {
            transformStyle = "scale-105 z-30 opacity-100";
          } else if (position === 1 || (currentIndex === rawImages.length - 1 && index === 0)) {
            transformStyle = "translate-x-5 sm:translate-x-32 scale-95 z-20 opacity-85";
          } else if (position === 2 || (currentIndex === rawImages.length - 1 && index === 0)) {
            transformStyle = "translate-x-5 sm:translate-x-96 scale-85 z-10 opacity-80 ";
          } else if (position === rawImages.length - 1 || (currentIndex === 0 && index === rawImages.length - 1)) {
            transformStyle = "-translate-x-56 sm:-translate-x-115 scale-95 z-20 opacity-85";
          } else if (position === rawImages.length - 2 || (currentIndex === 0 && index === rawImages.length - 1)) {
            transformStyle = "-translate-x-56 sm:-translate-x-180 scale-85 z-10 opacity-80";
          } else {
            transformStyle = "scale-90 opacity-0 pointer-events-none";
          }

          return (
            <div
              key={index}
              className={`${baseStyle} ${transformStyle} left-1/2 transform -translate-x-1/2 `}
            >
              <img
                src={image.img}
                alt={`Image ${index}`}
                className="object-cover w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[27rem]  rounded-2xl border-4 border-white shadow-xl"
              />
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-4 z-20 p-3 cursor-pointer bg-white rounded-full shadow-md text-2xl hover:scale-110 transition-transform"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Hero;
