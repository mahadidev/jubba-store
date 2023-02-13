"use client";
import { AiFillSkin } from "react-icons/ai";
import React from "react";
import { H1, H4, Product, Title } from "@/components";

const Popular = () => {
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
      title: "কালো এরাবিয়ান জুব্বা চেইন",
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
    {
      title: "ডাবল পার্ট জুব্বা সাদা-কালো",
      thumbnail: "/images/product_6.jpg",
      price: 350,
    },
  ]);

  return (
    <>
      <section className="py-12">
        <div className="container">
          <Title
            title="আমাদের কিছু পপুলার জুব্বা"
            subTitle=" জোব্বা নবী (সা.) পরেছেন, সাব্যস্ত হয়েছে। সুতরাং কেউ যদি নবী (সা.)
              পরেছেন, এই জন্য পরেন, তাহলে তিনি সওয়াব পাবেন।"
            icon={<AiFillSkin />}
            align="center"
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-y-7 gap-3 sm:gap-7">
            {products?.map((item: any, index: number) => (
              <Product {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
