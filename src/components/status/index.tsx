"use client";
import Link from "next/link";
import React from "react";
import Lottie from "react-lottie";
import Button from "../button";
import AnimationData from "./animation.json";

const Status = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="w-full max-w-[600px] mx-auto">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-green text-center">
            সাইটে কাজ চলছে...
          </h1>
          <Link href="/">
            <Button className="bg-red text-white mx-auto mt-2">হোম পেজ</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Status;
