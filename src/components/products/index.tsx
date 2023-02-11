"use client";
import React from "react";
import Product from "../product";

const Products = () => {
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
    <>
      <section className="py-24 bg-[url(../../public/images/shop_breadcrumb_bg.png)] bg-cover bg-center bg-no-repeat relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black/50"></div>
        <div className="container relative z-20">
          <h1 className="text-4xl text-white font-bold">আমাদের সকল জুব্বা</h1>
          <p className="text-xl text-white font-bold">
            জোব্বা নবী (সা.) পরেছেন, সাব্যস্ত হয়েছে। সুতরাং কেউ যদি নবী (সা.)
            পরেছেন
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
        </div>
      </section>
    </>
  );
};

export default Products;
