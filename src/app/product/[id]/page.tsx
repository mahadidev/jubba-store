"use client";
import { ProductDetail } from "@/components";
import { Breadcrumb } from "@/components";
import { useStateContext } from "@/context";
import { useRouter } from "next/navigation";
import React from "react";

const ProductPage = (searchParams: any) => {
  // state
  const [id, setId] = React.useState<string | null>();
  // context
  const { contextDefaultCall } = useStateContext();

  // on load
  React.useEffect(() => {
    // call default context function
    contextDefaultCall();
    // get product id
    if (searchParams.params.id) {
      setId(searchParams.params.id);
    }
  }, []);
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
      <ProductDetail id={id ? id : null} />
    </>
  );
};

export default ProductPage;
