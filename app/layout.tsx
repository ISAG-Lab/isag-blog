/* eslint-disable @next/next/no-head-element */
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head></head>
      <body className="flex flex-col bg-[#1E1E1E] lg:flex-row">
        <div className="order-3 basis-1/5 lg:order-1">
          <Navbar />
        </div>
        <main className="container order-1 mx-auto basis-3/5 px-5 py-12 lg:order-2 lg:max-w-screen-md">
          {children}
        </main>
        <div className="hidden basis-1/5 lg:order-3 lg:block">
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
