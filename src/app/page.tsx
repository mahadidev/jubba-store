"use client";
import { Blogs, Contact, Hero, Intro, Popular } from "@/components";
import React from "react";

const Page = () => {
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
