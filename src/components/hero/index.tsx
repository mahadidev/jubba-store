"use client";
import Image from "next/image";
import React from "react";
import { Pacifico, Hind_Siliguri, Roboto } from "@next/font/google";
import { MdOutlineLocalOffer, MdOutlineStyle } from "react-icons/md";
import { BsCollection, BsCash } from "react-icons/bs";
import Button from "../button";

const titleFont = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});
const sloganFont = Hind_Siliguri({
  weight: ["400", "700"],
  subsets: ["bengali"],
});
const boxFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Hero = () => {
  // state
  const [heroBox] = React.useState([
    {
      title: "Limited Time Offer: Save Big on Jubbas!",
      icon: <MdOutlineLocalOffer />,
    },
    {
      title: "New Collection: Fresh Jubbas at Unbeatable Prices!",
      icon: <BsCollection />,
    },
    {
      title: "Exclusive Discounts: Jubbas for Every Budget",
      icon: <BsCash />,
    },
    {
      title: "Jubba Sale: Get Your Favourite Styles at a Steal!",
      icon: <MdOutlineStyle />,
    },
  ]);

  return (
    <section className="bg-primary">
      <div className="container flex flex-col justify-end relative">
        <div className="grid grid-cols-2 gap-24 items-center">
          <div className="">
            <Image
              className="w-full max-w-[900px]"
              width={1200}
              height={1200}
              src="/images/hero_model.png"
              alt="Model Picture"
            />
          </div>
          <div className="py-8">
            <p className="text-white text-xl">بيت جبة السعودية</p>
            <h1
              className={`${titleFont.className} lg:text-4xl xl:text-8xl text-white`}
            >
              Soudia Jubba House
            </h1>
            <div className="w-full h-2 bg-white rounded my-4"></div>
            <p className={`${sloganFont.className} text-white text-3xl`}>
              সৌদি জুব্বা অতুলনীয় ডিজাইনের দেশ ও দেশের বাইরে সরবরাহ করি।
            </p>
            <Button className="bg-green text-white text-lg mt-4 ml-auto">
              Order Now
            </Button>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-4 gap-8 z-20 absolute lg:top-[80%] xl:top-[90%] right-0 left-0">
          {heroBox?.map(
            (
              item: {
                title: string;
                icon: any;
              },
              index: number
            ) => (
              <div
                className="w-full bg-white px-10 py-6 rounded-lg text-center shadow-[0_0_50px_#48585033]"
                key={index}
              >
                <span className="flex justify-center items-center mb-2 text-green text-4xl">
                  {item.icon}
                </span>
                <p className={`${boxFont.className} text-black text-lg`}>
                  {item.title}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
