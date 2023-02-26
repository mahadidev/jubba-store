"use client";
import React, { createContext, useContext } from "react";
import cartContext from "./cartContext";

const State = () => {
  // state
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const [modalClassName, setModalClassName] = React.useState<string>("");
  const [modalContent, setModalContent] = React.useState<any>();
  // modal
  const modalHandler = (
    dir: boolean,
    content?: any,
    modalClassName?: string
  ) => {
    // set modal open
    setModalOpen(dir);
    // set className to body
    if (dir) {
      document.body.classList.add("modal__open");
    } else {
      document.body.classList.remove("modal__open");
    }
    // set modal content
    if (content) {
      setModalContent(content);
    }
    // set modal class if has
    if (modalClassName) {
      setModalClassName(modalClassName);
    }
  };
  // cart
  const cart = cartContext();

  // call default
  const contextDefaultCall = () => {
    cart.getCartItems();
  };

  return {
    contextDefaultCall,
    isModalOpen,
    modalHandler,
    modalClassName,
    modalContent,
    ...cart,
  };
};

const Context = createContext({} as ReturnType<typeof State>);

export const ContextProvider = ({ children }: { children: any }) => {
  return <Context.Provider value={State()}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
