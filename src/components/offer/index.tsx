"use client";
import React from "react";
import { MdOutlineLocalOffer, MdOutlineStyle } from "react-icons/md";
import { BsCollection, BsCash } from "react-icons/bs";

const Offer = () => {
  // state
  const [heroBox] = React.useState([
    {
      title: "Limited Time Offer",
      icon: <MdOutlineLocalOffer />,
    },
    {
      title: "New Collection",
      icon: <BsCollection />,
    },
    {
      title: "Exclusive Discounts",
      icon: <BsCash />,
    },
    {
      title: "Jubba Sale",
      icon: <MdOutlineStyle />,
    },
  ]);
  return (
    <section className="relative py-6 sm:py-12 lg:py-16">
      <div className="container lg:absolute top-[-50%] right-0 left-0 m-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 z-20 ">
          {heroBox?.map(
            (
              item: {
                title: string;
                icon: any;
              },
              index: number
            ) => (
              <div
                className="w-full bg-white px-3 py-6 rounded-lg text-center shadow-[0_0_50px_#48585012]"
                key={index}
              >
                <span className="w-12 sm:w-16 h-12 sm:h-16 text-xl sm:text-3xl shadow-[0_0_50px_#48585012] bg-green text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </span>
                <p className={`text-black text-sm sm:text-lg`}>{item.title}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Offer;
