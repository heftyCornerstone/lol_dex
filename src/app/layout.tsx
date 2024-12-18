import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/TQprovider";
import Header from "@/components/Header";
import DarkThemeProvider from "./providers/DarkThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <DarkThemeProvider>
            <Header />
            <main className="max-w-screen-2xl pt-24">{children}</main>
          </DarkThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
