import Image from "next/image";
import React from "react";
import { H3, P } from "@/components";
import { A } from "../typography";

const Blog = ({
  thumbnail,
  title,
  description,
  href,
}: {
  thumbnail: string;
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <div className=" bg-white rounded-lg shadow-[0_0_#0000,0_0_#0000,0px_40px_150px_-35px_rgba(0,_0,_0,_0.05)] overflow-hidden">
      <div className="w-full h-auto mb-4 relative overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
          src={thumbnail}
          alt="Blog thumbnail"
        />
      </div>
      <div className="px-2 sm:px-7 pb-3 sm:pb-7">
        <a href={href} rel="noreferrer" target="_blank" className="block w-max">
          <H3 className="text-black w-max">{title}</H3>
        </a>
        <P className="text-light sm:mt-1 block">{description}</P>
        <A
          href={href}
          rel="noreferrer"
          target="_blank"
          className="w-max text-black underline mt-2 block"
        >
          Read More
        </A>
      </div>
    </div>
  );
};

export default Blog;
