"use client";
import { Copyright, Footer, Header, Modal } from "@/components";
import "./globals.css";
import { Hind_Siliguri } from "@next/font/google";
import { ContextProvider, useStateContext } from "@/context";

const fontFamily = Hind_Siliguri({
  weight: ["400", "700"],
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
          <Modal />
          <Footer />
          <Copyright />
        </body>
      </ContextProvider>
    </html>
  );
}
