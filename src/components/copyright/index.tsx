import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <div className="w-full py-2 bg-primary border-t">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between">
          <p className="text-white">কপিরাইট © 2023, সৌদিয়া জুব্বা হাউজ</p>
          <p className="text-white">
            Developed by
            <Link
              className="ml-2 text-red"
              href="https://mahadidev.vercel.app/"
              target="_blank"
            >
              Mahadi Hasan
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
