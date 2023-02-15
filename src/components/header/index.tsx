"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { useStateContext } from "@/context";

const Header = () => {
  const [menu] = React.useState([
    {
      label: "হোম",
      href: "/",
    },
    {
      label: "জুব্বা",
      href: "/shop",
    },
    {
      label: "আমাদের সম্পর্কে",
      href: "/about",
    },
    {
      label: "যোগাযোগ",
      href: "/contact",
    },
    {
      label: "ব্লগ",
      href: "/blog",
    },
  ]);
  const [isSidebar, setSidebar] = React.useState<boolean>(false);

  // context
  const { cartQty } = useStateContext();

  return (
    <header className="bg-white shadow-[0_0_15px_#20393c14] relative z-30">
      <div className="container flex gap-3 justify-between items-center py-2 sm:py-4">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            width={60}
            height={60}
            src={"/images/logo_black.png"}
            alt="Black Logo"
          />
          <h2 className="text-black text-xl font-semibold hidden">
            Saudia Jubba House
          </h2>
        </Link>
        <div className="hidden sm:flex gap-8 items-center">
          <div className="flex gap-8 items-center">
            {menu?.map(
              (
                item: {
                  label: string;
                  href: string;
                },
                index: number
              ) => (
                <Link
                  className={`flex items-center text-gray-500 hover:text-green transition-all text-lg uppercase`}
                  href={item.href}
                  key={index}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <button className="text-2xl text-gray-600 relative">
            {cartQty > 0 && (
              <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                {cartQty}
              </span>
            )}
            <AiOutlineShoppingCart />
          </button>
        </div>
        <div className="block sm:hidden">
          <div className="flex items-center gap-4">
            <button className="text-3xl text-gray-600 relative">
              {cartQty > 0 && (
                <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                  {cartQty}
                </span>
              )}
              <AiOutlineShoppingCart />
            </button>
            <button
              className={`flex items-center cursor-pointer text-3xl ${
                isSidebar ? "text-white" : "text-black"
              } relative z-30 transition-all`}
              onClick={() => setSidebar((status) => !status)}
            >
              {!isSidebar ? <HiMenuAlt3 /> : <AiOutlineClose />}
            </button>
          </div>

          <motion.aside
            className="w-[90%] h-screen fixed top-0 right-0 bg-primary shadow-[0_0_16px_#0003]"
            initial={{
              transform: isSidebar ? "translateX(0%)" : "translateX(100%)",
            }}
            animate={{
              transform: isSidebar ? "translateX(0%)" : "translateX(100%)",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
          >
            <div className="flex flex-col gap-2 pt-14">
              {menu?.map(
                (
                  item: {
                    label: string;
                    href: string;
                  },
                  index: number
                ) => (
                  <Link
                    className={`pl-8 py-2 text-white`}
                    href={item.href}
                    key={index}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </header>
  );
};

export default Header;
