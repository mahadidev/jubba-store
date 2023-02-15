"use client";
import React, { createContext, useContext } from "react";

const State = () => {
  // state
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const [modalClassName, setModalClassName] = React.useState<string>("");
  const [modalContent, setModalContent] = React.useState<any>();
  const [cartQty, setCartQty] = React.useState<number>(0);
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

  return {
    isModalOpen,
    modalHandler,
    modalClassName,
    modalContent,
    cartQty,
    setCartQty,
  };
};

const Context = createContext({} as ReturnType<typeof State>);

export const ContextProvider = ({ children }: { children: any }) => {
  return <Context.Provider value={State()}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
