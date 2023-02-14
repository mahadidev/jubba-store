import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { H4 } from "@/components";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Product = ({
  id,
  title,
  thumbnail,
  price,
}: {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}) => {
  // state
  const [isHover, setHover] = React.useState<boolean>(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);

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
          className="mb-4 relative overflow-hidden"
          transition={{
            layout: { duration: 4, type: "spring" },
          }}
        >
          <Link
            href="/product"
            className="w-full h-[15rem] sm:h-[20rem] lg:h-[30rem] relative flex justify-center items-start"
          >
            <Image
              width={500}
              height={500}
              src={thumbnail}
              alt="Jubba Picture"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              initial={{
                opacity: isHover ? 1 : 0,
                scale: isHover ? 1.05 : 1,
              }}
              animate={{
                opacity: isHover ? 1 : 0,
                scale: isHover ? 1.05 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 50,
              }}
              layout="position"
            >
              <Image
                width={500}
                height={500}
                src={"/images/product_1.jpg"}
                alt="Jubba Picture"
                className="w-full h-full object-cover"
              />
            </motion.div>
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
                type: "spring",
                stiffness: 260,
                damping: 30,
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
                type: "spring",
                stiffness: 260,
                damping: 30,
              }}
              layout="position"
            >
              লিংক কপি করুন
            </motion.div>
          </motion.div>
        </motion.div>
        <Link href={`product/${id}`}>
          <H4 className="text-black text-center">{title}</H4>
        </Link>
        <Link href={`product/${id}`}>
          <H4 className="text-center text-black font-bold">{price} BDT</H4>
        </Link>
      </motion.div>
    </>
  );
};

export default Product;
