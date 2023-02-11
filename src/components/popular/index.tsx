"use client";
import Image from "next/image";
import React from "react";
import { Button, Product } from "@/components";
import "swiper/css";
import Title from "../title";

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
    <section className="py-8 sm:py-24 bg-cover xl:bg-contain bg-no-repeat bg-popularMobile xl:bg-popularDesktop">
      <div className="container">
        <Title
          className="w-full max-w-[700px] mx-auto"
          titleClassName="!text-white text-center"
          subTitleClassName="!text-white text-center"
          subTitle="জোব্বা নবী (সা.) পরেছেন, সাব্যস্ত হয়েছে। সুতরাং কেউ যদি নবী (সা.)
          পরেছেন"
          isBorder={true}
          borderClassName="!bg-white"
        >
          আমাদের কিছু পপুলার জুব্বা
        </Title>
        <div className="grid grid-cols-6 gap-4 mt-8 bg-white rounded-lg shadow-[0_0_50px_#48585033] px-4 py-4">
          {products?.map(
            (
              item: {
                title: string;
                thumbnail: string;
                price: number;
              },
              index: number
            ) => (
              <Product key={index} {...item} />
            )
          )}
        </div>
        <Button className="bg-green text-white mx-auto mt-8">
          সকল জুব্বা দেখুন
        </Button>
      </div>
    </section>
  );
};

export default Popular;
