"use client";
import React from "react";

const Product = ({
  thumbnail,
  title,
  price,
}: {
  thumbnail: string;
  title: string;
  price: number;
}) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="p-1">
        <img
          width={600}
          height={600}
          src={thumbnail}
          alt={title}
          className="w-full h-[220px] object-cover"
        />
      </div>
      <div className="flex gap-2 justify-between items-center px-3 py-1">
        <h2 className="text-base text-black font-bold">{title}</h2>
        <p className="text-base text-green font-bold">{price}৳</p>
      </div>
    </div>
  );
};

export default Product;
