import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/sider";
import Search from "./components/search/search";
import Play from "./components/play/play";
import { Suspense } from "react";
import { AuthenProvider } from "./context/AppProvider";
import { cookies } from "next/headers";
import axios from "axios";
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App nghe nhac truc tuyen",
  description: "App nghe nhac",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const tokenInitial = cookieStore.get("authToken")?.value || "";
  const api_host = process.env.NEXT_PUBLIC_API_HOST;

  let wishlist: string[] = [];

  if (tokenInitial) {
    try {
      const response = await axios.get(
        `${api_host}/client/songs/wishlist`,
        {
          headers: {
            Authorization: `Bearer ${tokenInitial}`,
          },
        }
      );
      wishlist = response.data?.data.map((item: any) => item._id) || [];
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  }

  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#292929]`}>
        <AuthenProvider tokenAuthen={tokenInitial} wishlist={wishlist}>
          <div className="container mx-auto">
            <div className="flex items-start ">
              <div className="lg:w-[280px] md:w-[220px] md:block hidden mr-[20px]">
                <Sider />
              </div>
              <div className="flex-1">
                <Suspense>
                  <Search />
                </Suspense>
                <main className="mt-[30px]  h-[4000px]  mb-[120px]">
                  {children}
                </main>
              </div>
            </div>
          </div>
          <Play />
        </AuthenProvider>
      </body>
    </html>
  );
}
