"use client";
import Image from "next/image";
import React from "react";
import { Pacifico } from "@next/font/google";
import { Button, H1, H2 } from "@/components";

const titleFont = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="bg-primary">
      <div className="container flex flex-col justify-end relative">
        <div className="grid md:grid-cols-2 gap-24 items-center relative overflow-hidden md:overflow-auto">
          <div className="flex items-end">
            <Image
              className="w-full max-w-[900px]"
              width={1200}
              height={1200}
              src="/images/hero_model.png"
              alt="Model Picture"
            />
          </div>
          <div className="py-2 sm:py-4 px-2 sm:px-4 z-20 backdrop-blur-sm bg-white/80 md:bg-transparent shadow-[0_0_50px_#48585033] md:shadow-none rounded-lg absolute left-0 right-0 bottom-3 md:static">
            <p className="text-gray-700 md:text-white text-xl">
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
            <H1
              className={`${titleFont.className} text-black md:text-white xl:text-8xl`}
            >
              Soudia Jubba House
            </H1>
            <div className="w-full h-[3px] md:h-2 bg-green md:bg-white rounded my-2 md:my-4"></div>
            <H2 className={`text-light md:text-white font-bold`}>
              সৌদি জুব্বা অতুলনীয় ডিজাইনের দেশ ও দেশের বাইরে সরবরাহ করি।
            </H2>

            <p className="text-light md:text-white text-sm sm:text-base">
              - সৌদিয়া জুব্বা হাউজ
            </p>
            <Button className="bg-green text-white text-sm sm:text-lg sm:mt-2 ml-auto">
              অর্ডার করুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
