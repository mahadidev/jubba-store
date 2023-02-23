"use client";
import { AiFillSkin } from "react-icons/ai";
import React from "react";
import { H1, H4, Product, Title } from "@/components";
import { getData } from "@/lib";

const Popular = () => {
  // dummy product data
  const [products, setProducts] = React.useState<any>(null);

  // set data
  const setData = (data: any) => {
    setProducts(data);
  };

  // on load
  React.useEffect(() => {
    getData({
      collectionName: "products",
      onSuccess: (data: any) => {
        setData(data);
      },
    });
  }, []);

  return (
    <>
      <section className="py-12">
        <div className="container">
          <Title
            title="আমাদের কিছু পপুলার জুব্বা"
            subTitle=" জোব্বা নবী (সা.) পরেছেন, সাব্যস্ত হয়েছে। সুতরাং কেউ যদি নবী (সা.)
              পরেছেন, এই জন্য পরেন, তাহলে তিনি সওয়াব পাবেন।"
            icon={<AiFillSkin />}
            align="center"
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-y-7 gap-3 sm:gap-7">
            {products?.map((item: any, index: number) => (
              <Product {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
