import React from "react";
import { H1 } from "@/components";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "@/context";

const Modal = () => {
  // context state
  const { isModalOpen, modalHandler } = useStateContext();

  return (
    <>
      {isModalOpen && (
        <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-50 bg-primary/80 flex justify-center items-center">
          <div className="w-full max-w-[800px]">
            <div className="w-full flex justify-end mb-2 relative -right-8">
              <button
                className="text-4xl text-white ml-auto block"
                onClick={() => modalHandler()}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="w-full py-8 px-3 bg-white rounded-lg relative">
              <H1>Hello World!</H1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
