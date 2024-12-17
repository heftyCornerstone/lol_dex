import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navigationbar from "@/components/Navigationbar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "LoL dex",
  description: "The Dazzling Dictionary of League of Legends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="darkMode">
        <Header/>
        <Providers>
          <main className="max-w-screen-2xl pt-24">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
// bg-black text-white