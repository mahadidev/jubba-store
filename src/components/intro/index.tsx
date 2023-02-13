"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { H1, H4 } from "@/components";
import {useStateContext} from "@/context";

const NewIntro = () => {
  const [isHover, setHover] = React.useState<boolean>(false);

  // context
  const { modalHandler } = useStateContext();

  return (
    <section className="mt-12 sm:mt-24">
      <div className="grid md:grid-cols-2">
        <div className="w-full h-[30vh] md:h-[60vh] bg-[url(../../public/images/intro_bg.png)]">
          <div className="w-full h-full bg-primary flex flex-col justify-center px-3 py-5 md:pl-12 md:pr-3">
            <div className="w-full max-w-[600px]">
              <H1 className="text-white font-bold">
                জোব্বা, পাঞ্জাবি ও পাজামা পরা কি সুন্নত?
              </H1>
              <H4 className=" text-slate-200 font-bold mt-4">
                জোব্বা নবী (সা.) পরেছেন, সাব্যস্ত হয়েছে। সুতরাং কেউ যদি নবী
                (সা.) পরেছেন, এই জন্য পরেন, তাহলে তিনি সওয়াব পাবেন কোনো সন্দেহ
                নেই।
              </H4>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[30vh] md:h-[60vh] bg-gray-100 overflow-hidden relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.div
            className="w-full h-full relative"
            initial={{
              scale: isHover ? 1.05 : 1,
            }}
            animate={{
              scale: isHover ? 1.05 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 50,
            }}
          >
            <Image
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              src="/images/jubba_intro.png"
              alt="Jubba Fashion"
            />
            <div className="w-full h-full bg-black/20 absolute top-0 left-0 right-0 bottom-0"></div>
          </motion.div>

          <button className="absolute top-0 bottom-0 left-0 right-0 m-auto z-30 w-max h-max play__icon__wrapper rounded-full" onClick={() => modalHandler()}>
            <Image
              className="w-[80px] h-[80px]"
              width={120}
              height={120}
              src="/images/play_icon_white.webp"
              alt="Play Icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewIntro;
