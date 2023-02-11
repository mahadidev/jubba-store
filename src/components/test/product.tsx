import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Product = ({
  title,
  thumbnail,
  price,
}: {
  title: string;
  thumbnail: string;
  price: number;
}) => {
  // state
  const [isHover, setHover] = React.useState<boolean>(false);

  return (
    <>
      <motion.div
        className="w-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        layout
        transition={{
          layout: { duration: 4, type: "spring" },
        }}
      >
        <motion.div
          layout="position"
          className="w-full h-[15rem] sm:h-[20rem] lg:h-[30rem] mb-4 relative"
          transition={{
            layout: { duration: 4, type: "spring" },
          }}
        >
          <Link href="/product">
            <Image
              width={500}
              height={500}
              src={thumbnail}
              alt="Jubba Picture"
              className="w-full h-full object-cover"
            />
          </Link>

          <motion.div
            className="hidden lg:flex absolute top-0 left-0 w-full h-full justify-center items-end gap-3"
            layout="position"
          >
            <motion.div
              className="w-max px-7 py-2 bg-white shadow-2xl mb-4 cursor-pointer"
              initial={{
                opacity: isHover ? 1 : 0,
                scale: isHover ? 1 : 0.5,
              }}
              animate={{
                opacity: isHover ? 1 : 0,
                scale: isHover ? 1 : 0.5,
              }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              layout="position"
            >
              জুব্বা টি দেখুন
            </motion.div>
            <motion.div
              className="w-max px-7 py-2 bg-white shadow-2xl mb-4 cursor-pointer"
              initial={{
                opacity: isHover ? 1 : 0,
                scale: isHover ? 1 : 0.5,
              }}
              animate={{
                opacity: isHover ? 1 : 0,
                scale: isHover ? 1 : 0.5,
              }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              layout="position"
            >
              লিংক কপি করুন
            </motion.div>
          </motion.div>
        </motion.div>
        <Link href="/product">
          <h1 className="text-base sm:text-xl text-black text-center">
            {title}
          </h1>
        </Link>
        <Link href="/product">
          <p className="text-base sm:text-xl text-center text-black font-bold">
            {price} BDT
          </p>
        </Link>
      </motion.div>
    </>
  );
};

export default Product;
