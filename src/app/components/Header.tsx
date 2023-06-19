"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Header() {
  const router = usePathname();

  const routerSelect =
    "text-primary-light font-semibold text-lg border-b-2 border-primary-focused";

  const routerHover =
    "transition duration-300 hover:border-b-2 hover:border-primary-light ";

  return (
    <div className="flex flex-row justify-around relative w-full h-28 items-center text-text-light mb-30vh">
      <div >
        <Image src="/img/logo/logoLight.png" width={50} height={50} alt="logo"/>
      </div>
      <div className="flex flex-row justify-around w-1/4">
        <Link href="/">
          <h1 className={`${router === "/" && routerSelect} ${routerHover}`}>
            Inicio
          </h1>
        </Link>
        <Link href="/pages/home/services">
          <h1
            className={`${
              router === "/pages/home/services" && routerSelect
            }  ${routerHover}`}
          >
            Serviços
          </h1>
        </Link>
        <Link href="/pages/home/aboutUs">
          <h1
            className={`${
              router === "/pages/home/aboutUs" && routerSelect
            }  ${routerHover}`}
          >
            Sobre Nós
          </h1>
        </Link>
      </div>

      <button className="bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full shadow-lg transform active:scale-95 transition-transform">
        <Link href="/pages/login">Login</Link>
      </button>
    </div>
  );
}
