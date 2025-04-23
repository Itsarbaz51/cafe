import React from "react";
import { Link, useLocation } from "react-router-dom";

export function CoffeeNewsCard({ image, date, title, id }) {
  return (
    <Link to={`exploring/${id}`}>
      <div className="hover:scale-95 cursor-pointer duration-700">
        <img
          src={image}
          alt={title}
          className="rounded-2xl w-full h-[25rem] object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{date}</p>
          <h3 className="font-semibold text-lg text-black">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export const newsItems = [
  {
    id: 1,
    image:
      "https://framerusercontent.com/images/WdPcmK6WsWeWHrhqIJCvdYtA.jpg?scale-down-to=2048",
    date: "Mar 15, 2024",
    title: "Exploring the World of Coffee Origins",
    content: [
      "At Latte Haven, we believe every cup of coffee tells a story...",
      "Ethiopian Coffee: Ethiopia is often considered the birthplace of coffee...",
      "Colombian Coffee: Colombian coffee is prized for its smooth, balanced flavor...",
    ]
  },
  {
    id: 2,
    image:
      "https://framerusercontent.com/images/nuDSHnIFowt4cHh6TTY0cDBAVI.jpg?scale-down-to=2048",
    date: "Feb 28, 2024",
    title: "5 Ways to Elevate Your Coffee Experience at Home",
    content: [
      "At Latte Haven, we believe every cup of coffee tells a story. Today, we embark on a journey around the world to explore the origins of coffee. From the highlands of Ethiopia to the plantations of Colombia, discover how regional characteristics shape the flavors we love.",
      "Ethiopian Coffee: Ethiopia is often considered the birthplace of coffee. Ethiopian coffee is known for its bright acidity and complex flavor profiles, often featuring fruity and floral notes that stand out beautifully when prepared as pour-over, Chemex, or cold brew.",
      "Colombian Coffee: Colombian coffee is prized for its smooth, balanced flavor and medium body. These high-grown beans produced in the Andean mountains contribute to its signature clean taste with a good balance of sweetness and acidity.",
      "Brazilian Coffee: As the largest coffee producer in the world, Brazilian coffee beans are typically lower in acidity, with a heavier body and rich, chocolatey notes. The diverse microclimates of Brazil allow for a variety of flavor profiles, making it a versatile option for espresso blends.",
      "Sumatran Coffee: Grown in Indonesia’s rainforest, Sumatran coffee is one of the most distinctive coffees in the world. Known for its earthy, bold notes with hints of herbal and spicy undertones, Sumatran beans are often used in dark roast blends to add depth and body."
    ]

  },
  {
    id: 3,
    image:
      "https://framerusercontent.com/images/7MaKWyyvDSoo5ueFYsJkDl3I.jpg?scale-down-to=2048",
    date: "Feb 6, 2024",
    title: "Eco-Friendly Practices at Latte Haven",
    content: [
      "At Latte Haven, we believe every cup of coffee tells a story. Today, we embark on a journey around the world to explore the origins of coffee. From the highlands of Ethiopia to the plantations of Colombia, discover how regional characteristics shape the flavors we love.",
      "Ethiopian Coffee: Ethiopia is often considered the birthplace of coffee. Ethiopian coffee is known for its bright acidity and complex flavor profiles, often featuring fruity and floral notes that stand out beautifully when prepared as pour-over, Chemex, or cold brew.",
      "Colombian Coffee: Colombian coffee is prized for its smooth, balanced flavor and medium body. These high-grown beans produced in the Andean mountains contribute to its signature clean taste with a good balance of sweetness and acidity.",
      "Brazilian Coffee: As the largest coffee producer in the world, Brazilian coffee beans are typically lower in acidity, with a heavier body and rich, chocolatey notes. The diverse microclimates of Brazil allow for a variety of flavor profiles, making it a versatile option for espresso blends.",
      "Sumatran Coffee: Grown in Indonesia’s rainforest, Sumatran coffee is one of the most distinctive coffees in the world. Known for its earthy, bold notes with hints of herbal and spicy undertones, Sumatran beans are often used in dark roast blends to add depth and body."
    ]

  },
  {
    id: 4,
    image:
      "https://framerusercontent.com/images/7MaKWyyvDSoo5ueFYsJkDl3I.jpg?scale-down-to=2048",
    date: "Feb 6, 2024",
    title: "Eco-Friendly Practices at Latte Haven",
    content: [
      "At Latte Haven, we believe every cup of coffee tells a story. Today, we embark on a journey around the world to explore the origins of coffee. From the highlands of Ethiopia to the plantations of Colombia, discover how regional characteristics shape the flavors we love.",
      "Ethiopian Coffee: Ethiopia is often considered the birthplace of coffee. Ethiopian coffee is known for its bright acidity and complex flavor profiles, often featuring fruity and floral notes that stand out beautifully when prepared as pour-over, Chemex, or cold brew.",
      "Colombian Coffee: Colombian coffee is prized for its smooth, balanced flavor and medium body. These high-grown beans produced in the Andean mountains contribute to its signature clean taste with a good balance of sweetness and acidity.",
      "Brazilian Coffee: As the largest coffee producer in the world, Brazilian coffee beans are typically lower in acidity, with a heavier body and rich, chocolatey notes. The diverse microclimates of Brazil allow for a variety of flavor profiles, making it a versatile option for espresso blends.",
      "Sumatran Coffee: Grown in Indonesia’s rainforest, Sumatran coffee is one of the most distinctive coffees in the world. Known for its earthy, bold notes with hints of herbal and spicy undertones, Sumatran beans are often used in dark roast blends to add depth and body."
    ]

  },
  
];

function CoffeeNewsSection() {
  const shortNews = newsItems.slice(0, 3);
  const locationPath = useLocation();
  return (
    <div className="sm:py-10 bg-[#FFFCEA] px-4 sm:px-20 w-full flex-col h-full  ">
      <h2 className="text-4xl mb-4">
        {locationPath.pathname == "/" ? "Latest coffee news" : "All news"}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 pt-8 my-10">
        {locationPath.pathname == "/"
          ? shortNews.map((item, index) => (
              <CoffeeNewsCard
                key={index}
                image={item.image}
                date={item.date}
                title={item.title}
                id={item.id}
              />
            ))
          : newsItems.map((item, index) => (
              <CoffeeNewsCard
                key={index}
                image={item.image}
                date={item.date}
                title={item.title}
                id={item.id}
              />
            ))}
      </div>
    </div>
  );
}

export default CoffeeNewsSection;
