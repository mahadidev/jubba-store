"use client";
import { Copyright, Footer, Header, Modal } from "@/components";
import React from "react";
import "./globals.css";
import { Hind_Siliguri } from "@next/font/google";
import { ContextProvider } from "@/context";
import { Toaster } from "react-hot-toast";

const fontFamily = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <ContextProvider>
        <body className={`${fontFamily.className} min-h-screen relative`}>
          <Header />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
          <Modal />
          <Footer />
          <Copyright />
        </body>
      </ContextProvider>
    </html>
  );
}
