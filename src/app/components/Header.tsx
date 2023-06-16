import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-around relative w-full h-28 items-center text-text-light mb-30vh">
      <h1 className="text-xl">Pro Agro</h1>
      <div className="flex flex-row justify-around w-1/4">
        <Link href="/">
          <h1>Inicio</h1>
        </Link>
        <Link href="/pages/home/services">
          <h1>Serviços</h1>
        </Link>
        <Link href="/pages/home/aboutUs">
          <h1>Sobre Nós</h1>
        </Link>
      </div>

      <button className="bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full">
        <Link href="/pages/login">Login</Link>
      </button>
    </div>
  );
}
