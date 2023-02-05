import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 sm:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <h1 className="text-4xl text-white">আমাদের সাথে যোগাযোগ</h1>
            <div className="w-full h-[2px] bg-white rounded my-2"></div>
            <div className="flex items-start gap-2">
              <span className="text-xl text-white flex items-start">
                <BsTelephoneFill />
              </span>
              <p className="text-lg text-white">মোবাইলঃ 01712-726117</p>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <span className="text-xl text-white flex items-start">
                <MdEmail />
              </span>
              <p className="text-lg text-white">
                ইমেলঃ soudiajubbahouse@gmail.com
              </p>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <span className="text-xl text-white flex items-start">
                <MdLocationPin />
              </span>
              <p className="text-lg text-white">
                ঠিকানাঃ Jahangir Nagar Society Chayabithi, Savar Dhaka
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl text-white">ওয়েব সাইটের পেজ</h1>
            <div className="w-full h-[2px] bg-white rounded my-2"></div>
            <Link href="/" className="flex items-center gap-2">
              <p className="text-lg text-white">হোম পেজ</p>
            </Link>
            <Link href="/shop" className="flex items-center gap-2 mt-2">
              <p className="text-lg text-white">সকল জুব্বা দেখুন</p>
            </Link>
            <Link href="/about" className="flex items-center gap-2 mt-2">
              <p className="text-lg text-white">আমাদের সম্পর্কে জানুন</p>
            </Link>
            <Link href="/blog" className="flex items-center gap-2 mt-2">
              <p className="text-lg text-white">ইসলামিক ব্লগ পেজ</p>
            </Link>
          </div>
          <div>
            <h1 className="text-4xl text-white">সামাজিক যোগাযোগ মাধ্যম</h1>
            <div className="w-full h-[2px] bg-white rounded my-2"></div>
            <Link href="/" className="flex items-center gap-2">
              <p className="text-lg text-white">FACEBOOK</p>
            </Link>
            <Link href="/" className="flex items-center gap-2 mt-2">
              <p className="text-lg text-white">WEBSITE</p>
            </Link>
            <Link href="/" className="flex items-center gap-2 mt-2">
              <p className="text-lg text-white">EMAIL</p>
            </Link>
            <Link href="/" className="flex items-center gap-2 mt-2">
              <p className="text-lg text-white">YOUTUBE</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
