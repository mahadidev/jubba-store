"use client";
import { useStateContext } from "@/context";
import { getData } from "@/lib";
import Image from "next/image";
import React from "react";
import { QtyItemType } from "types";
import { Section } from "../typography";

const Cart = () => {
  // dummy product data
  const [products, setProducts] = React.useState<any>(null);

  // context
  const { cartItems } = useStateContext();

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
    <Section>
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
          <div className="flex items-start justify-between">
            {/* <Dialog.Title className="text-lg font-medium text-gray-900">
              Shopping cart
            </Dialog.Title> */}
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                // onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close panel</span>
                {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems?.map((cartItem: QtyItemType, index: number) => (
                  <li key={index} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      {cartItem.product.thumbnail ? (
                        <Image
                          src={`${cartItem.product.thumbnail}`}
                          alt={"Product Image"}
                          width={200}
                          height={200}
                          className="h-full w-full object-cover object-center"
                        />
                      ) : (
                        <Image
                          src={`${cartItem.product.images[1]}`}
                          alt={"Product Image"}
                          width={200}
                          height={200}
                          className="h-full w-full object-cover object-center"
                        />
                      )}
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a>{cartItem.product.name}</a>
                          </h3>
                          <p className="ml-4">BDT {cartItem.price}</p>
                        </div>
                        <ul>
                          {cartItem.variants.map(
                            (variantItem: any, index: number) => (
                              <>
                                <li key={index}>
                                  <b>Qty:</b> {variantItem.qty}
                                </li>
                                <li key={index}>
                                  <b>Size:</b> {variantItem.size}
                                </li>
                                <li key={index}>
                                  <b>Color: </b> {variantItem.color}
                                </li>
                              </>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => alert()}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Cart;
