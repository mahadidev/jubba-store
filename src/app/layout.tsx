import { Header } from "@/components";
import "./globals.css";
import { Open_Sans } from "@next/font/google";

const fontFamily = Open_Sans({ subsets: ["latin"] });

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
