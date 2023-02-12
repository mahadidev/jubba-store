"use client";
import { Blog, Contact, Hero, Intro, Popular } from "@/components";
import React from "react";

const Page = () => {
  return (
    <main>
      <Hero />
      <Popular />
      <Intro />
      <Blog />
      <Contact />
    </main>
  );
};

export default Page;
