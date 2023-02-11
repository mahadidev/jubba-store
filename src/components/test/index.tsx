"use client";
import Image from "next/image";
import React from "react";
import Contact from "../contact";
import Product from "./product";

const Test = () => {
  // dummy product data
  const [products] = React.useState<
    {
      title: string;
      thumbnail: string;
      price: number;
    }[]
  >([
    {
      title: "সেমি-লং সৌদিয়া সাদা জুব্বা",
      thumbnail: "/images/product_1.jpg",
      price: 350,
    },
    {
      title: "কালো এরাবিয়ান জুব্বা চেইন কোর্ট",
      thumbnail: "/images/product_2.jpg",
      price: 350,
    },
    {
      title: "মডার্ন বোটাম জুব্বা গ্রে-কালার",
      thumbnail: "/images/product_3.jpg",
      price: 350,
    },
    {
      title: "শর্ট সাহেবি পাঞ্জবি সাদা রং",
      thumbnail: "/images/product_4.jpg",
      price: 350,
    },
    {
      title: "গোল গলা লং জুব্বা কালো রং",
      thumbnail: "/images/product_5.jpg",
      price: 350,
    },
  ]);

  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <Image
              width={100}
              height={100}
              src="/images/hand.webp"
              alt="Hand Picture"
              className="mx-auto block mb-6"
            />
            <h1 className="text-5xl text-center text-black">
              আমাদের কিছু পপুলার জুব্বা
            </h1>
            <p className="text-light text-center text-lg w-full max-w-[500px] mx-auto mt-4">
              জোব্বা নবী (সা.) পরেছেন, সাব্যস্ত হয়েছে। সুতরাং কেউ যদি নবী (সা.)
              পরেছেন, এই জন্য পরেন, তাহলে তিনি সওয়াব পাবেন।
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-7">
            {products?.map((item: any, index: number) => (
              <Product {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Test;
