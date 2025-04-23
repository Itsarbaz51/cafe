import React from "react";
import { Link } from "react-router-dom";

const AboutCafe = ({
  image,
  logo,
  heading,
  description,
  locationLabel,
  address,
  buttonText,
}) => {
  return (
    <div className="flex mx-4 sm:mx-0 flex-col sm:flex-row items-center rounded-[2rem] bg-[#FFF6E6] p-6 sm:p-12 gap-10">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt="Cafe interior"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full sm:w-1/2 text-black">
        {logo && <img src={logo} alt="Logo" className="mb-4 w-24" />}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center sm:text-start">
          {heading}
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed text-center sm:text-start">
          {description}
        </p>

        <div className="mb-6 text-center sm:text-start">
          <p className="font-semibold">{locationLabel}</p>
          <p className="whitespace-pre-line">{address}</p>
        </div>

        <div className="flex justify-center items-center sm:justify-start">
          <Link
            className="cursor-pointer bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            to="#menu"
          >
            {/* <button className=""> */}
            {buttonText}
            {/* </button> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCafe;
