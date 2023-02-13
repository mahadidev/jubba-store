"use client";
import React, { createContext, useContext } from "react";

const State = () => {
  // state
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  // modal
  const modalHandler = () => {
    // set modal open
    setModalOpen((prev) => !prev);
    // set className to body
    if (!isModalOpen) {
      document.body.classList.add("modal__open");
    } else {
      document.body.classList.remove("modal__open");
    }
  };

  return { isModalOpen, modalHandler };
};

const Context = createContext({} as ReturnType<typeof State>);

export const ContextProvider = ({ children }: { children: any }) => {
  return <Context.Provider value={State()}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
