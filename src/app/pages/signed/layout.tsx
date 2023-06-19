"use client";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import NavBar from "@/app/components/navBar/page";
import { IPAGEDATA_INFO, IPAGE_INFO } from "@/app/constants/LateralBar.i";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [selectNav, setSelectNav] = useState<IPAGEDATA_INFO>();
  const [selectPage, setSelectPage] = useState<IPAGE_INFO>();

  // const featchLocalStorage = async () => {
  //   const navData = JSON.parse(localStorage.getItem("userDataNav")!);
  //   const navPageData = JSON.parse(localStorage.getItem("userDataNavPage")!);

  //   setSelectNav(navData);
  //   setSelectPage(navPageData);
  // };

  // useEffect(() => {
  //   featchLocalStorage();
  // }, []);

  return (
    // <html>
    //   <body>
    <main className="flex flex-row min-h-screen">
      <NavBar />
      <div className="
      flex flex-1 flex-col">
        <div className="flex flex-row py-5 px-10">
          {/* <h1>Icon</h1>
          <h1>NameTela</h1> */}
        </div>
        <div className="flex flex-1 flex-col pt-5 pl-10 ">{children}</div>
      </div>
    </main>
    //   </body>
    // </html>
  );
}
