import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/sider";
import Search from "./components/search/search";
import Play from "./components/play/play";
import { Suspense } from "react";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App nghe nhac truc tuyen",
  description: "App nghe nhac",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#292929]` }>
        <div className="container mx-auto">
          <div className="flex items-start">
            <div className="w-[280px] mr-[20px]">
              <Sider />
            </div>

            <div className=" flex-1">
                <Suspense >

                  <Search />
                </Suspense>
                <main className="mt-[30px]  h-[4000px]  mb-[120px]">
                    {children}
                </main>
            </div>
          </div>
        </div>
        <Play />
        
        
        
        
        </body>
    </html>
  );
}
