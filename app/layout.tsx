import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });


const getRecommendedTags = async () => {
  const recommendedTags = await fetch(
    "http://localhost:3000/api/tags",
    { cache: "no-store" }
  )

  if (!recommendedTags.ok) {
    return Error("Failed to fetch the recommended tags");
  }

  const tags = await recommendedTags.json();
  tags.length = 7;
  return tags;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const tags = await getRecommendedTags();
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="flex flex-col bg-[#1E1E1E] lg:flex-row">
        <div className="order-3 basis-1/5 lg:order-1">
          <Navbar />
        </div>
        <main className="container order-2 mx-auto basis-3/5 px-5 lg:py-12 lg:max-w-screen-md">
          {children}
        </main>
        <div className="order-1 basis-1/5 lg:order-3 lg:block">
          <Sidebar recommendedTags={tags} />
        </div>
      </body>
    </html>
  );
}
