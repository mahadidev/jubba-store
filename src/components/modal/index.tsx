import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "@/context";

const Modal = () => {
  // context state
  const { isModalOpen, modalHandler, modalClassName, modalContent } =
    useStateContext();

  return (
    <>
      {isModalOpen && (
        <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-50 bg-primary/80 flex justify-center items-center">
          <div className="w-max">
            <div className="w-full flex justify-end mb-2 relative right-0 sm:-right-8">
              <button
                className="text-4xl text-white ml-auto block"
                onClick={() => modalHandler(false)}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div
              className={`w-full bg-white rounded-lg relative ${modalClassName}`}
            >
              {modalContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
