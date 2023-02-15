"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperClass from "swiper/types/swiper-class";
import SwiperCore, {
  FreeMode,
  Navigation,
  Thumbs,
  Controller,
  Zoom,
} from "swiper";
import {
  Button,
  H1,
  H3,
  H5,
  H6,
  P,
  Quantity,
  Radio,
  Section,
} from "@/components";
import { useStateContext } from "@/context";

const ProductDetail = () => {
  // context
  const { cartQty, setCartQty } = useStateContext();
  // state
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
  const swiper1Ref = useRef<any>(null);
  const swiper2Ref = useRef();
  const [productData] = React.useState<{
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    images: {
      src: string;
    }[];
  }>({
    id: 1,
    title: "Saudia Stylish Jubba",
    description:
      "সিরিয়ার রাজা একদিন শুনলেন পেতলের শহর নামে একটি শহর রয়েছে। সেই শহরে রয়েছে পেতলের। কলসে বন্দী অনেকগুলাে জ্বিন। তিনি তার মন্ত্রী আর। উজিরকে পাঠালেন অভিযানে। তারা কি খুঁজে পেল সেই। শহর? এমনই চোদ্দটি গল্প নিয়ে সচিত্র আরব্য রজনীর গল্প সংকলন পেতলের শহর।",
    thumbnail: "/images/product_1.jpg",
    price: 399,
    images: [
      {
        src: "/images/product_1.jpg",
      },
      {
        src: "/images/product_2.jpg",
      },
      {
        src: "/images/product_3.jpg",
      },
      {
        src: "/images/product_4.jpg",
      },
      {
        src: "/images/product_5.jpg",
      },
      {
        src: "/images/product_6.jpg",
      },
    ],
  });
  const [selectedColor, setSelectedColor] = React.useState<string>();
  const [selectedSize, setSelectedSize] = React.useState<string>();
  const [selectedQty, setSelectedQty] = React.useState<number>(1);

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      if (swiper1Ref.current?.controller) {
        swiper1Ref.current.controller.control = swiper2Ref.current;
      }
    }
  }, []);

  // add to cart
  const addCart = () => {
    setCartQty((prevQty: number) => prevQty + selectedQty);
  };

  return (
    <Section className="!py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="w-full col-span-1">
          <Swiper
            onSwiper={(swiper) => {
              if (swiper1Ref.current !== null) {
                swiper1Ref.current = swiper;
              }
            }}
            controller={{ control: secondSwiper }}
            spaceBetween={10}
            slidesPerView={1}
            grabCursor={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs, Controller]}
            className="w-[100%] h-[20rem] sm:h-[30rem] lg:h-[20rem] xl:h-[30rem]"
          >
            {productData.images.map(
              (
                item: {
                  src: string;
                },
                index: number
              ) => (
                <SwiperSlide className="h-full" key={index}>
                  <img
                    className="w-full h-full object-cover object-top"
                    src={item.src}
                    alt="Product Image"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <Swiper
            controller={{ control: firstSwiper }}
            loop={false}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            touchRatio={0.2}
            slideToClickedSlide={true}
            onSwiper={setThumbsSwiper}
            modules={[Navigation, Thumbs, Controller]}
            className="w-full h-auto mt-4 rounded-xl"
          >
            {productData.images.map(
              (
                item: {
                  src: string;
                },
                index: number
              ) => (
                <SwiperSlide
                  className="w-[60px] h-[80px] sm:h-[100px]"
                  key={index}
                >
                  <img
                    src={item.src}
                    alt="Product Image"
                    className="rounded-xl w-full h-full object-cover"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        <div className="w-full lg:col-span-2">
          <div className="w-full max-w-[600px]">
            <H6 className="text-red font-bold">আমাদের জুব্বা কালেশন</H6>
            <H1>{productData.title}</H1>
            <P className="w-full max-w-[600px] my-3 text-light">
              {productData.description}
            </P>
            <div className="text-light flex gap-2 items-center mt-2">
              <P className="text-red !text-lg">মুল্য: </P>
              <P className="!text-lg">৳{productData.price}</P>
            </div>
            <div className="w-full h-[1px] my-3 bg-red/50"></div>
            <div className="w-full bg-gray-100 p-3 rounded-s mb-3">
              <table>
                <tr>
                  <td className="p-2 flex items-center">
                    জুব্বার রংঃ {selectedColor}
                  </td>
                  <td className="p-2 flex items-center">
                    <div className="flex gap-2 items-center">
                      {[
                        { className: "bg-black", label: "কালো" },
                        {
                          className: "bg-slate-200",
                          label: "সাদা",
                        },
                        {
                          className: "bg-blue-900",
                          label: "ব্লু",
                        },
                      ].map(
                        (
                          item: {
                            className: string;
                            label: string;
                          },
                          index: number
                        ) => (
                          <Radio
                            label={item.label}
                            name={"color"}
                            onChange={(color: string) => {
                              setSelectedColor(color);
                            }}
                            key={index}
                          >
                            <span
                              className={`block w-5 h-5 rounded-full ${item.className}`}
                            ></span>
                            {item.label}
                          </Radio>
                        )
                      )}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 flex items-center">
                    সাইজঃ {selectedSize}
                  </td>
                  <td className="p-2 flex items-center">
                    <div className="flex gap-2 items-center">
                      <Radio
                        label="sm"
                        name="size"
                        onChange={(size: string) => {
                          setSelectedSize(size);
                        }}
                      >
                        Small
                      </Radio>
                      <Radio
                        label="md"
                        name="size"
                        onChange={(size: string) => {
                          setSelectedSize(size);
                        }}
                      >
                        Medium
                      </Radio>
                      <Radio
                        label="lg"
                        name="size"
                        onChange={(size: string) => {
                          setSelectedSize(size);
                        }}
                      >
                        Large
                      </Radio>
                      <Radio
                        label="xl"
                        name="size"
                        onChange={(size: string) => {
                          setSelectedSize(size);
                        }}
                      >
                        Extra Large
                      </Radio>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 flex items-center">
                    পরিমানঃ {selectedQty}
                  </td>
                  <td className="p-2 flex items-center">
                    <Quantity
                      value={selectedQty}
                      onChange={(qty: number) => {
                        setSelectedQty(qty);
                      }}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-2 items-center">
                <Button className="bg-primary text-white">Buy Now</Button>
                <Button className="bg-gray-100 text-black" onClick={addCart}>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProductDetail;
