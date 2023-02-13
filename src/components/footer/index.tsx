import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import React from "react";
import Link from "next/link";
import { H1, H4, H5, H6, P } from "@/components";

const Footer = () => {
  return (
    <footer className="bg-[#0A0E19] py-16 sm:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <H1 className="text-white">আমাদের সাথে যোগাযোগ</H1>
            <div className="w-full h-[2px] bg-white rounded my-2"></div>
            <div className="flex items-start gap-2">
              <span className="text-xl text-white flex items-start">
                <BsTelephoneFill />
              </span>
              <H6 className="text-white">মোবাইলঃ 01712-726117</H6>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <span className="text-xl text-white flex items-start">
                <MdEmail />
              </span>
              <H6 className="text-white">ইমেলঃ soudiajubbahouse@gmail.com</H6>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <span className="text-xl text-white flex items-start">
                <MdLocationPin />
              </span>
              <H6 className="text-white">
                ঠিকানাঃ Jahangir Nagar Society Chayabithi, Savar Dhaka
              </H6>
            </div>
          </div>
          <div>
            <H1 className="text-white">ওয়েব সাইটের পেজ</H1>
            <div className="w-full h-[2px] bg-white rounded my-2"></div>
            <Link href="/" className="flex items-center gap-2">
              <H6 className="text-white">হোম পেজ</H6>
            </Link>
            <Link href="/shop" className="flex items-center gap-2 mt-2">
              <H6 className="text-white">সকল জুব্বা দেখুন</H6>
            </Link>
            <Link href="/about" className="flex items-center gap-2 mt-2">
              <H6 className="text-white">আমাদের সম্পর্কে জানুন</H6>
            </Link>
            <Link href="/blog" className="flex items-center gap-2 mt-2">
              <H6 className="text-white">ইসলামিক ব্লগ পেজ</H6>
            </Link>
          </div>
          <div>
            <H1 className="text-white">সামাজিক মাধ্যম</H1>
            <div className="w-full h-[2px] bg-white rounded my-2"></div>
            <Link href="/" className="flex items-center gap-2">
              <H6 className="text-white">FACEBOOK</H6>
            </Link>
            <Link href="/" className="flex items-center gap-2 mt-2">
              <H6 className="text-white">WEBSITE</H6>
            </Link>
            <Link href="/" className="flex items-center gap-2 mt-2">
              <H6 className="text-white">EMAIL</H6>
            </Link>
            <Link href="/" className="flex items-center gap-2 mt-2">
              <H6 className="text-white">YOUTUBE</H6>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
