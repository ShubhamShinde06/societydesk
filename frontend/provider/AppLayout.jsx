"use client";

import Footer from "@/components/AppComponents/Footer";
import SideBar from "@/components/AppComponents/SideBar";
import { usePathname, useSearchParams } from "next/navigation";
//import Header from "@/components/AppComponents/Header";


export default function AppLayout({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hiddenPaths = [
    "/",
    "/auth",
    "/auth/login",
    "/auth/register",
    "/auth/society",
    "/auth/forgot",
    "/auth/set-new-password"
  ];

  const isReadonly = searchParams?.get("view") === "readonly";
  const hasRptFrmNo = searchParams?.has("RptFrmNo");
  const hideLayout =
    hiddenPaths.includes(pathname) || (isReadonly && hasRptFrmNo);
  

  return (
    <>
      {!hideLayout && <SideBar />}
      <main className="flex-1 w-full h-screen overflow-hidden">
        <div className=" rounded-lg dark:bg-[#0a0a0a]  flex flex-col  h-full ">
          {!hideLayout && (
            <div className="sticky top-0 z-20 dark:bg-[#0a0a0a] backdrop-blur-md border-white/10">
              {/* <Header /> */}
            </div>
          )}

          <div className="flex-1 overflow-auto custom-scroll ">
            {children}
          </div>

          {!hideLayout && (
            <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl px-4 py-2">
              <Footer/>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
