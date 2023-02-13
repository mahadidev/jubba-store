import Link from "next/link";
import React from "react";
import { P } from "@/components";

const Copyright = () => {
  return (
    <div className="w-full py-2 bg-[#0A0E19] border-t">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between gap-1">
          <P className="text-white">কপিরাইট © 2023, সৌদিয়া জুব্বা হাউজ</P>
          <P className="text-white">
            Developed by
            <Link
              className="ml-2 text-red"
              href="https://mahadidev.vercel.app/"
              target="_blank"
            >
              Mahadi Hasan
            </Link>
          </P>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
