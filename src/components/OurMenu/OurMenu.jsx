import React from "react";

function OurMenu({ coffeeMenu }) {
  return (
    <div className="flex px-4 sm:px-20 w-full flex-col h-full py-10 ">
      <h2 className="text-4xl mb-4" id="menu">Our Menu</h2>
      {coffeeMenu.map((menu, i) => (
        <div key={i} className={`pt-8 flex flex-col-reverse sm:flex-row space-x-6 justify-center h-full my-10 ${menu.className}`}>
          <div className="w-full sm:w-[60rem] bg-[#FFF5E0] h-fit rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">{menu.cardTitle}</h3>
            <ul className="w-full">
              {menu.coffeeItems.length > 0 ? (
                menu.coffeeItems.map((item, index) => (
                  <li key={index} className="mb-4 w-full">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.subTitle}</span>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.tagLine}</p>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No items available.</p>
              )}
            </ul>
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="relative">
              <img
                src={menu.img}
                alt={menu.teaName}
                className="rounded-lg w-full h-full object-contain"
              />
              <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-full">
                {menu.teaName}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurMenu;
