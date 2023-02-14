"use client";
import { ProductDetail } from "@/components";
import { Breadcrumb } from "@/components";
import React from "react";

const ProductPage = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Shop",
            link: "/shop",
          },
          {
            label: "Product",
            link: "#",
          },
        ]}
      />
      <ProductDetail />
    </>
  );
};

export default ProductPage;
