import { Header } from "@/components";
import "./globals.css";
import { Hind_Siliguri } from "@next/font/google";

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
      <body className={`${fontFamily.className} min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
