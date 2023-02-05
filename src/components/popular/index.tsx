"use client";
import Image from "next/image";
import React from "react";
import { Button, Product } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Popular = () => {
  const [products] = React.useState<
    {
      title: string;
      thumbnail: string;
      price: number;
    }[]
  >([
    {
      title: "সৌদি জুব্বা",
      thumbnail: "/images/product_1.jpg",
      price: 350,
    },
    {
      title: "এরাবিয়ান জুব্বা",
      thumbnail: "/images/product_2.jpg",
      price: 350,
    },
    {
      title: "বাংলাদেশী জুব্বা",
      thumbnail: "/images/product_3.jpg",
      price: 350,
    },
    {
      title: "মোলভি জুব্বা",
      thumbnail: "/images/product_4.jpg",
      price: 350,
    },
    {
      title: "বেবি জুব্বা",
      thumbnail: "/images/product_5.jpg",
      price: 350,
    },
    {
      title: "সাদা জুব্বা",
      thumbnail: "/images/product_6.jpg",
      price: 350,
    },
    {
      title: "ব্লাক জুব্বা",
      thumbnail: "/images/product_7.jpg",
      price: 350,
    },
  ]);

  return (
    <section className="py-8 sm:py-24 min-h-screen bg-cover xl:bg-contain bg-no-repeat bg-popularMobile xl:bg-popularDesktop">
      <div className="container">
        <h1 className="text-4xl text-white sm:text-center">
          কিছু পপুলার জুব্বা
        </h1>
        <p className="text-base text-white sm:text-center">
          জোব্বা নবী (সা.) পরেছেন, সাব্যস্ত হয়েছে। সুতরাং কেউ যদি নবী (সা.)
          পরেছেন
        </p>
        <div className="w-full max-w-[500px] h-1 mx-auto bg-white rounded-lg my-2"></div>
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
          >
            {products?.map(
              (
                item: {
                  title: string;
                  thumbnail: string;
                  price: number;
                },
                index: number
              ) => (
                <SwiperSlide
                  className="overflow-visible py-8 sm:py-12"
                  key={index}
                >
                  <Product {...item} />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        <Button className="bg-green text-white mx-auto">
          সকল জুব্বা দেখুন
        </Button>
      </div>
    </section>
  );
};

export default Popular;
