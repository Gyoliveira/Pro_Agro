"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PAGES_INFO from "@/app/constants/LateralBar";
import Icon from "./components/Icon";
import Pages from "./components/Pages";
import { IPAGEDATA_INFO } from "@/app/constants/LateralBar.i";

export default function NavBar() {
  const [selectPage, setSelectPage] = useState<IPAGEDATA_INFO>();

  const handleSelectPage = async (data: any) => {
    await localStorage.setItem("userDataNav", JSON.stringify(data));
    setSelectPage(data);
  };

  const renderMainIcons = () => {
    return PAGES_INFO.main_items.map((item) => (
      <Icon
        key={item.name}
        nameIcon={item.iconName}
        isSelected={item.name === selectPage?.name}
        onFunction={() => handleSelectPage(item)}
      />
    ));
  };

  const renderSubIcons = () => {
    return PAGES_INFO.sub_items.map((item) => (
      <Icon
        key={item.name}
        nameIcon={item.iconName}
        isSelected={item.name === selectPage?.name}
        onFunction={() => handleSelectPage(item)}
      />
    ));
  };

  const renderPageList = () => {
    return PAGES_INFO.main_items.map((item) => {
      <Icon key={item.name} nameIcon={item.iconName} />;
    });
  };

  useEffect(() => {
    const navData = JSON.parse(localStorage.getItem("userDataNav")!);
    setSelectPage(navData);
    console.log(navData);
  }, []);

  return (
    <div className="flex flex-row relative min-h-screen">
      <div className="flex flex-col justify-between items-center h-auto w-5vw bg-primary-focused py-5 shadow-lg">
        <div className="flex flex-col items-center">
          <Image
            src="/img/logo/logoSimpleLight.svg"
            width={50}
            height={50}
            alt="logo"
            className="-ml-1 mb-10"
          />
          {renderMainIcons()}
        </div>
        <div className="flex flex-col items-center">
          {renderSubIcons()}
          <Icon nameIcon="logout" />
          <div className="w-3/4 h-1 bg-white mb-5 rounded-full"></div>
          <Image src="/img/rogerio.png" width={50} height={50} alt={`alt`} />
        </div>
      </div>

      <Pages title={selectPage?.title} data={selectPage?.pages} />
    </div>
  );
}
