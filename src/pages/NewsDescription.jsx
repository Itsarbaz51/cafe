import React from "react";
import { useParams } from "react-router-dom";
import { newsItems } from "../components/CoffeeNewsCard/CoffeeNewsCard";

function NewsDescription() {
  const { id } = useParams();
  const news = Object(newsItems)[id];
//   console.log(newsItems);

  if (!news) {
    return <div className="p-8">Article not found.</div>;
  }

  return (
    <div className="bg-[#FFFCEA] px-8 md:px-32 py-16 text-black lg:flex lg:flex-row w-full gap-8">
      <img
        src={news.image}
        alt={news.title}
        className="rounded-2xl w-full max-h-[35rem] object-cover mb-10"
      />
      <div className="pl-2">
        <p className="text-sm text-gray-500 mb-2">{news.date}</p>
        <h1 className="text-4xl font-semibold mb-6">{news.title}</h1>
        <div className="space-y-4 text-lg leading-relaxed">
          {news.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph.includes(":") ? (
                <>
                  <strong>{paragraph.split(":")[0]}:</strong>{" "}
                  {paragraph.split(":").slice(1).join(":")}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsDescription;
