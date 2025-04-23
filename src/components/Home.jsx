import React from "react";
import Hero from "../pages/Hero";
import OurMenu from "./OurMenu/OurMenu";
import CoffeeNewsSection from "./CoffeeNewsCard/CoffeeNewsCard";
import AboutCafe from "./AboutCafe/AboutCafe ";

function Home() {
  const coffeeMenu = [
    {
      cardTitle: "Coffee",
      img: "https://framerusercontent.com/images/ffAQuLErAZ9FhPrK3M7QLPo5g.png",
      teaName: "Latte",
      coffeeItems: [
        {
          subTitle: "Espresso",
          tagLine: "Rich and bold single shot of espresso.",
          price: "$2.50",
        },
        {
          subTitle: "Americano",
          tagLine: "Espresso with hot water for a smooth, robust flavor.",
          price: "$3.00",
        },
        {
          subTitle: "Latte",
          tagLine:
            "Espresso with steamed milk and a light layer of foam. Flavors: Vanilla, Caramel, Hazelnut, Mocha.",
          price: "$4.00",
        },
        {
          subTitle: "Cappuccino",
          tagLine: "Equal parts espresso, steamed milk, and foam.",
          price: "$4.00",
        },
        {
          subTitle: "Flat White",
          tagLine: "Silky microfoam over a double shot of espresso.",
          price: "$4.00",
        },
        {
          subTitle: "Macchiato",
          tagLine: "Espresso marked with a dollop of frothy steamed milk.",
          price: "$4.00",
        },
        {
          subTitle: "Mocha",
          tagLine:
            "Espresso, steamed milk, and rich chocolate syrup, topped with whipped cream.",
          price: "$4.00",
        },
        {
          subTitle: "Cold Brew",
          tagLine: "Smooth and refreshing cold-brewed coffee, served over ice.",
          price: "$4.00",
        },
      ],
    },
    {
      cardTitle: "Specialty Lattes",
      img: "https://framerusercontent.com/images/i6aEvR24jRpFkZDao1hmf0YYo.png",
      teaName: "Chai Latte",
      className: "sm:flex-row-reverse gap-x-6",
      coffeeItems: [
        {
          subTitle: "Matcha Latte",
          tagLine: "Ceremonial grade matcha blended with steamed milk.",
          price: "$4.50",
        },
        {
          subTitle: "Turmeric Latte",
          tagLine:
            "Turmeric, ginger, and cinnamon blended with steamed milk for a healthy boost.",
          price: "$4.50",
        },
        {
          subTitle: "Chai Latte",
          tagLine: "Spiced chai tea blended with steamed milk.",
          price: "$4.00",
        },
        {
          subTitle: "Honey Lavender Latte",
          tagLine: "Espresso, steamed milk, honey, and a hint of lavender.",
          price: "$5.00",
        },
      ],
    },
    {
      cardTitle: "Tea & Other Beverages",
      img: "https://framerusercontent.com/images/rgN0P1vQKsq9ZG5BJOPaR9KY.png", // Hot Chocolate image
      teaName: "Hot Chocolate",
      // className: 'gap-x-6', // you can add 'flex-row-reverse' if needed
      coffeeItems: [
        {
          subTitle: "Tea",
          tagLine: "Selection of black, green, and herbal teas.",
          price: "$3.00",
        },
        {
          subTitle: "Hot Chocolate",
          tagLine: "Rich and creamy hot chocolate, topped with whipped cream.",
          price: "$4.50",
        },
        {
          subTitle: "Golden Milk",
          tagLine: "Turmeric, ginger, and honey blended with steamed milk.",
          price: "$4.00",
        },
        {
          subTitle: "Iced Tea",
          tagLine: "Freshly brewed and chilled, served over ice.",
          price: "$5.00",
        },
      ],
    },
    {
      cardTitle: "Pastries & Baked Goods",
      img: "https://framerusercontent.com/images/PRDfIQEwfBAD6WhfpVujpWW5c.png", // Croissant image
      teaName: "Croissant",
      className: "sm:flex-row-reverse gap-x-6",
      coffeeItems: [
        {
          subTitle: "Croissant",
          tagLine: "Buttery and flaky, baked fresh daily.",
          price: "$3.00",
        },
        {
          subTitle: "Muffins",
          tagLine: "Varieties: Blueberry, Chocolate Chip, Banana Nut.",
          price: "$2.50",
        },
        {
          subTitle: "Scones",
          tagLine: "Varieties: Cranberry Orange, Vanilla Bean.",
          price: "$4.00",
        },
        {
          subTitle: "Cookies",
          tagLine:
            "Varieties: Chocolate Chip, Oatmeal Raisin, Double Chocolate.",
          price: "$2.00",
        },
        {
          subTitle: "Brownies",
          tagLine: "Rich and fudgy, with a crackly top.",
          price: "$3.00",
        },
      ],
    },
  ];

  return (
    <section className="sm:mx-10 flex flex-col justify-center items-center py-12 space-y-8">
      <div className="flex flex-col justify-center items-center">
        <span className="bg-[#FFF7E6] px-7 rounded-full py-4 text-xl">
          Google:{" "}
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              style={{
                userSelect: "none",
                width: "18px",
                height: "19px",
                display: "inline-block",
                fill: "var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(0, 0, 0))",
                color:
                  "var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(0, 0, 0))",
                flexShrink: 0,
              }}
            >
              <g
                color="var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(0, 0, 0))"
                weight="fill"
              >
                <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
              </g>
            </svg>
          ))}{" "}
          (4.9)
        </span>
        <div className="text-center space-y-4 py-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-black">
            Brewed to perfection
          </h1>
          <p className="text-gray-700">
            Your perfect spot for coffee, pastries, and more.
          </p>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <button className="bg-black cursor-pointer text-white px-6 py-2 rounded-full hover:bg-gray-800 transition font-semibold">
              Explore menu
            </button>
          </a>
        </div>
      </div>
      <Hero />
      <OurMenu coffeeMenu={coffeeMenu} />
      <CoffeeNewsSection />
      <AboutCafe
        image="https://framerusercontent.com/images/wGH7yhEM7Dvwg5tG7oiMVQd0M.png"
        logo="https://framerusercontent.com/images/V5tIwQyz2S0O66AuNJHLQeGtQ.png"
        heading="We love coffee"
        description={`Latte Haven is a cozy and welcoming spot in the heart of the city, offering a delightful selection of specialty coffees, fresh pastries, and wholesome meals.\n\nJoin us for a moment of relaxation and indulgence.`}
        locationLabel="Location:"
        address={`Latte Haven\n123 Latte Lane\nFood City, FC 12345`}
        buttonText="Explore menu"
      />
    </section>
  );
}

export default Home;
