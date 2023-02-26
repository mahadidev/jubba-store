"use client";
import { Blogs, Contact, Hero, Intro, Popular } from "@/components";
import { useStateContext } from "@/context";
import React from "react";

const Page = () => {
  // context
  const { contextDefaultCall } = useStateContext();

  // on load
  React.useEffect(() => {
    // call default context function
    contextDefaultCall();
  });

  return (
    <main>
      <Hero />
      <Popular />
      <Intro />
      <Blogs />
      <Contact />
    </main>
  );
};

export default Page;
