"use client";

import React from "react";
import Lottie from "react-lottie";
import AnimationData from "./animation.json";

const Intro = () => {
  return (
    <section className="flex items-center py-16 sm:py-24 lg:py-40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mt-4">
          <div className="">
            <h1 className="text-3xl text-green">
              জোব্বা, পাঞ্জাবি ও পাজামা পরা কি সুন্নত?
            </h1>
            <p>
              উত্তর : জোব্বা নবী (সা.) পরেছেন, সাব্যস্ত হয়েছে। সুতরাং কেউ যদি
              নবী (সা.) পরেছেন, এই জন্য পরেন, তাহলে তিনি সওয়াব পাবেন কোনো সন্দেহ
              নেই।নবী (সা.) বিভিন্ন ধরনের জোব্বা পরেছেন, ইয়েমেনি জোব্বা পরেছেন,
              রোমি জোব্বা পরেছেন, সুস্পষ্ট হাদিসের মাধ্যমে সাব্যস্ত হয়েছে।
              সুনানে তিরমিজি, সুনানে নাসাঈর মধ্যে হাদিসটি রয়েছে, একাধিক হাদিসের
              কিতাবের মধ্যে এই মর্মে হাদিস রয়েছে। তাই যদি কেউ নবী (সা.) পরেছেন এ
              কারণে তিনি জোব্বা পরেন, তাহলে তিনি নবী (সা.)-এর আমলের কারণে সওয়াব
              পাবেন, শুধু জোব্বা পরার কারণে নয়।
            </p>
          </div>
          <div className="w-full max-w-[600px] mx-auto lg:mr-0 lg:ml-auto">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: AnimationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={"auto"}
              width={"100%"}
              isClickToPauseDisabled={true}
              speed={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
