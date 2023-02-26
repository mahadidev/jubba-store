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
import { getData } from "@/lib";
import { ProductType } from "types";
import { motion } from "framer-motion";

const ProductDetail = ({ id }: { id: string | null }) => {
  // context
  const { cartAdd } = useStateContext();
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
  const [product, setProduct] = React.useState<ProductType | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<string>();
  const [selectedSize, setSelectedSize] = React.useState<{
    label: string;
    value: string;
  }>();
  const [selectedQty, setSelectedQty] = React.useState<number>(1);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      if (swiper1Ref.current?.controller) {
        swiper1Ref.current.controller.control = swiper2Ref.current;
      }
    }
  }, []);

  // on load
  React.useEffect(() => {
    if (id) {
      getData({
        collectionName: "products",
        id: id,
        onSuccess: (data: any) => {
          setProduct(data);
        },
      });
    }
  }, [id]);

  // check cart & buy process
  const checkProcess = () => {
    if (!selectedColor) {
      setErrorMessage("যে কোনো একটা কালার বাছাই করুন");
      return false;
    }
    if (!selectedSize) {
      setErrorMessage("যে কোনো  সাইজ বাছাই করুন");
      return false;
    }
    if (!selectedQty) {
      return false;
    }
    return true;
  };

  // add to cart
  const onAddCart = () => {
    // check validity
    checkProcess();
    // add to cart
    if (product && selectedColor && selectedSize) {
      cartAdd({
        product: product,
        qty: selectedQty,
        color: selectedColor,
        size: selectedSize?.value,
      });
    }
  };

  // on buy now
  const onBuyNow = () => {
    if (checkProcess()) {
      alert("let's go");
    }
  };

  return (
    <Section className="!py-8" contain={false}>
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full max-w-[400px]">
            {product ? (
              <>
                {product?.images && (
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
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[FreeMode, Thumbs, Controller]}
                    className="w-[100%] h-[20rem] sm:h-[30rem] lg:h-[20rem] xl:h-[30rem]"
                  >
                    {product?.images.map((item: string, index: number) => {
                      if (item) {
                        return (
                          <SwiperSlide className="h-full" key={index}>
                            <img
                              width={1000}
                              height={1000}
                              className="w-full h-full object-cover object-top"
                              src={item}
                              alt="Product Image"
                            />
                          </SwiperSlide>
                        );
                      }
                    })}
                  </Swiper>
                )}
                {product?.images && (
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
                    {product?.images.map((item: string, index: number) => {
                      if (item) {
                        return (
                          <SwiperSlide
                            className="w-[60px] h-[80px] sm:h-[100px] cursor-grab"
                            key={index}
                          >
                            <img
                              width={100}
                              height={100}
                              src={item}
                              alt="Product Image"
                              className="rounded-xl w-full h-full object-cover object-top"
                            />
                          </SwiperSlide>
                        );
                      }
                    })}
                  </Swiper>
                )}
              </>
            ) : (
              "Loading Images"
            )}
          </div>
          <motion.div
            className="w-full"
            layout
            transition={{
              layout: { duration: 0.5, type: "spring" },
            }}
          >
            <div className="w-full max-w-[600px]">
              <H6 className="text-red font-bold">আমাদের জুব্বা কালেশন</H6>
              {id ? <H1>{product?.name}</H1> : "Loading ittle"}
              {id ? (
                <P className="w-full max-w-[600px] my-3 text-light">
                  {product?.description}
                </P>
              ) : (
                "Loading Description"
              )}
              {id ? (
                <div className="text-light flex gap-2 items-center mt-2">
                  <P className="text-red !text-lg">মুল্য: </P>
                  <P className="!text-lg">৳{product?.price}</P>
                </div>
              ) : (
                "Loading Attributes"
              )}
              <div className="w-full h-[1px] my-3 bg-red/50"></div>
              {id ? (
                <motion.div
                  className="w-full bg-gray-100 p-3 rounded-s mb-3"
                  layout
                  transition={{
                    layout: { duration: 0.5, type: "spring" },
                  }}
                >
                  <table>
                    <tbody>
                      <tr>
                        <td className="p-2 flex items-center">
                          জুব্বার রংঃ {selectedColor}
                        </td>
                        <td className="p-2 flex items-center">
                          <div className="flex gap-2 items-center">
                            {product?.colors.map(
                              (item: string, index: number) => (
                                <Radio
                                  label={item}
                                  name={"color"}
                                  onChange={(color: string) => {
                                    setSelectedColor(color);
                                    setErrorMessage(null);
                                  }}
                                  value={item}
                                  key={index}
                                >
                                  {item && (
                                    <span
                                      className={`block w-5 h-5 rounded-full`}
                                      style={{
                                        background: `${item}`,
                                      }}
                                    ></span>
                                  )}
                                  {item}
                                </Radio>
                              )
                            )}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 flex items-center">
                          সাইজঃ {selectedSize?.label}
                        </td>
                        <td className="p-2 flex items-center">
                          <div className="flex gap-2 items-center">
                            {product?.size.map(
                              (
                                item: {
                                  label: string;
                                  value: string;
                                },
                                index: number
                              ) => (
                                <Radio
                                  label={item.label}
                                  name="size"
                                  onChange={(selectedItem: {
                                    label: string;
                                    value: string;
                                  }) => {
                                    setSelectedSize(selectedItem);
                                    setErrorMessage(null);
                                  }}
                                  value={item}
                                  key={index}
                                >
                                  {item.label}
                                </Radio>
                              )
                            )}
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
                              setErrorMessage(null);
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {errorMessage && (
                    <p className="pt-2 text-red">{errorMessage}</p>
                  )}
                </motion.div>
              ) : (
                "Loading Box"
              )}
              <div className="flex gap-3 items-center justify-between">
                <div className="flex gap-2 items-center">
                  {id ? (
                    <>
                      <Button
                        className="bg-primary text-white"
                        onClick={() => {
                          onBuyNow();
                        }}
                      >
                        Buy Now
                      </Button>
                      <Button
                        className="bg-gray-100 text-black"
                        onClick={onAddCart}
                      >
                        Add to cart
                      </Button>
                    </>
                  ) : (
                    "Loading Button"
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ProductDetail;
