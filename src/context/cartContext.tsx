/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { ProductType, QtyItemType } from "types";
import { toast } from "react-hot-toast";

const cartContext = () => {
  const [cartQty, setCartQty] = React.useState<number>(0);
  const [cartItems, setCartItems] = React.useState<QtyItemType[] | null>(null);
  // qty
  const cartAdd = ({
    product,
    qty,
    color,
    size,
  }: {
    product: ProductType;
    qty: number;
    color: string;
    size: string;
  }) => {
    // increase qty
    setCartQty((prevQty) => {
      localStorage.setItem("cartQty", JSON.stringify(prevQty + qty));
      return prevQty + qty;
    });
    // check if product already exists in cart
    const findProduct = cartItems?.find(
      (qtyItem: QtyItemType) => qtyItem.product.id === product.id
    );
    // remove existing product
    const filterProduct = cartItems?.filter(
      (qtyItem: QtyItemType) => qtyItem.product.id !== product.id
    );

    let productVariant = [
      {
        qty: findProduct ? findProduct.qty + qty : qty,
        size: size,
        color: color,
      },
    ];

    // if has existing product
    if (findProduct) {
      // find variant
      const findVariant = findProduct.variants.find(
        (variant) => variant.color === color && variant.size === size
      );
      // filter variant
      const filterVariant = findProduct.variants.filter(
        (variant) => variant.color !== color || variant.size !== size
      );
      const newProductVariant = {
        qty: findVariant ? findVariant.qty + qty : qty,
        size: size,
        color: color,
      };
      if (filterVariant) {
        productVariant = [...filterVariant, newProductVariant];
      } else {
        productVariant = [newProductVariant];
      }
    }
    // new cart item
    const newCartItem = {
      price: findProduct
        ? findProduct.price + product.price * qty
        : qty * product.price,
      qty: findProduct ? findProduct.qty + qty : qty,
      product: product,
      variants: productVariant,
    };
    if (filterProduct) {
      setCartItems([...filterProduct, newCartItem]);
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...filterProduct, newCartItem])
      );
    } else {
      setCartItems([newCartItem]);
      localStorage.setItem("cartItems", JSON.stringify([newCartItem]));
    }
    toast.success(`${product.name} কার্টে যোগ করা হয়েছে।`);
  };

  const getCartItems = () => {
    const storageCartItems =
      typeof window !== "undefined" ? localStorage.getItem("cartItems") : null;
    if (storageCartItems) {
      setCartItems(JSON.parse(storageCartItems));
    }
    const storageCartQty =
      typeof window !== "undefined" ? localStorage.getItem("cartQty") : null;
    if (storageCartQty) {
      setCartQty(Number(JSON.parse(storageCartQty)));
    }
  };

  return {
    cartQty,
    cartItems,
    getCartItems,
    cartAdd,
  };
};

export default cartContext;
