import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PAGES_INFO from "@/app/constants/LateralBar";
import { IPAGE_INFO } from "@/app/constants/LateralBar.i";
import Icon from "./components/Icon";

export default function Services() {
  
  const [selectPage, setSelectPage] = useState({
    name: "dashboard",
    title: "Dashboard",
    iconName: "home",
    iconNameEnterprise: "",
    pages: [
      {
        name: "Inicio",
        route: "",
      },
    ],
  },)

  const handleRenderMainIcons = () => {
    return PAGES_INFO.main_items.map(
      (item) => <Icon key={item.name} nameIcon={item.iconName} />
    );
  };

  const handleRenderSubIcons = () => {
    return PAGES_INFO.sub_items.map((item) => (
      <Icon key={item.name} nameIcon={item.iconName} />
    ));
  };

  const selectPage = (data: any) => {
    // localStorage.setItem("actualPage", data);
    setSelectPage(data)
  };

  return (
    <div className="relative flex min-h-screen flex-row">
      <div className="flex flex-col justify-between items-center h-auto w-5vw bg-primary-focused py-5 shadow-lg">
        <div className="flex flex-col items-center">
          <Image
            src="/img/logo/logoSimpleLight.svg"
            width={50}
            height={50}
            alt="logo"
            className="-ml-1 mb-10"
          />
          {handleRenderMainIcons()}
        </div>
        <div className="flex flex-col items-center">
          {handleRenderSubIcons()}
          <Icon nameIcon="logout" />
          <div className="w-3/4 h-1 bg-white mb-5 rounded-full"></div>
          <Image src="/img/rogerio.png" width={50} height={50} alt={`alt`} />
        </div>
      </div>
      <div className="h-auto w-15vw bg-primary-default bg-my_bg_lateral_image bg-cover bg-no-repeat bg-center"></div>
    </div>
  );
}
