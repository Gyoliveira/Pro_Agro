"use client";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import NavBar from "@/app/components/navBar/page";
import { IPAGE_INFO } from "@/app/constants/LateralBar.i";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [selectNav, setSelectNav] = useState<IPAGE_INFO>();
  const [selectPage, setSelectPage] = useState<IPAGE_INFO>();

  useEffect(() => {
    const navData = JSON.parse(localStorage.getItem("userDataNav")!);
    const navPageData = JSON.parse(localStorage.getItem("userDataNavPage")!);

    setSelectNav(navData);
    setSelectPage(navPageData);
  }, []);


  return (
    // <html>
    //   <body>
    <main className="flex flex-row min-h-screen">
      <NavBar />
      <div>
        <div className="flex flex-row">
          <h1>Icon</h1>
          <h1>NameTela</h1>
        </div>
        <div className="flex flex-col pt-5 pl-10">
          {selectPage?.}
          {children}
        </div>
      </div>
    </main>
    //   </body>
    // </html>
  );
}
