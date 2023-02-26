"use client";
import { Cart } from "@/components";
import React from "react";
import { useStateContext } from "@/context";

const CartPage = () => {
  // context
  const { contextDefaultCall } = useStateContext();

  // on load
  React.useEffect(() => {
    // call default context function
    contextDefaultCall();
  });
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
