"use client";

import { IPAGEDATA_INFO } from "@/app/constants/LateralBar.i";
import { usePathname, useRouter } from "next/navigation";

interface Prop {
  title: string | undefined;
  data: IPAGEDATA_INFO[] | undefined;
}

export default function Pages({ title, data }: Prop) {
  const router = usePathname();
  const { push } = useRouter();

  const saveStorage = (name: string) => {
    localStorage.setItem("userDataNavPage", name);
  }

  const sendToPage = ({route, name}: IPAGEDATA_INFO) => {
    const navPrefix = "/pages/signed/" + route;
    saveStorage(name)
    push(navPrefix);
  }

  const renderMainIcons = () => {
    return data?.map((item) => (
      <div key={item.name} className="flex flex-col">
        <button
          className={`${
            router === `/pages/signed/${item.route}` &&
            "bg-primary-blur rounded-lg px-5 py-2 mr-8 "
          } mb-3 ml-2 text-left transform active:scale-95 transition-transform`}
          onClick={() => sendToPage(item)}
        >
          {item.name}
        </button>
      </div>
    ));
  };

  return (
    <div className="flex flex-col h-auto w-15vw bg-primary-default bg-my_bg_lateral_image bg-cover bg-no-repeat bg-center font-playfair_regular text-white font-semibold pt-7 px-2">
      <h1 className="mb-5 text-2xl">{title}</h1>
      {renderMainIcons()}
    </div>
  );
}
