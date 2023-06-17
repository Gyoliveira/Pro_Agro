"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" grid grid-cols-4 bg-primary-dark font-playfair_regular px-15p pb-24 pt-10">
      <div>
        <Image
          src="/img/logo/logoReta.svg"
          width={140}
          height={140}
          alt="logo"
          className="mb-8"
        />
        <ul className="text-primary-default font-medium">
          <li className="mb-2">Como Funciona</li>
          <li className="mb-2">Blog</li>
          <li className="mb-2">Central de Ajuda</li>
          <li className="mb-2">Termos de Uso</li>
          <li className="mb-2">Politicas de Privacidade</li>
        </ul>
      </div>

      <div>
        <h1 className="text-text-light font-playfair_bold text-2xl mb-8 pt-5">
          Para Empresas
        </h1>
        <ul className="text-primary-default font-medium">
          <li className="mb-2">Área de Empresa</li>
          <li className="mb-2">Cadastro de Empresa</li>
          <li className="mb-2">Como Funciona</li>
          <li className="mb-2">Publique seu Projeto</li>
          <li className="mb-2">Escolher Freelancers</li>
        </ul>
      </div>

      <div>
        <h1 className="text-text-light font-playfair_bold text-2xl mb-8 pt-5">
          Para Freelancers
        </h1>
        <ul className="text-primary-default font-medium">
          <li className="mb-2">Área de Freelancers</li>
          <li className="mb-2">Cadastro de Freelancers</li>
          <li className="mb-2">Como funciona</li>
          <li className="mb-2">Lista de Projetos</li>
        </ul>
      </div>

      <div>
        <h1 className="text-text-light font-playfair_bold text-2xl mb-8 pt-5">
          Download
        </h1>

        <button className="flex flex-row justify-center items-start text-text-light border-2 border-primary-default rounded-lg p-1.5 mb-5 shadow-lg transform active:scale-95 transition-transform">
          <Image src="/icon/AppleLogo.png" width={50} height={50} alt="logo" />
          <div className="flex flex-col items-start">
            <span className="mb-1"> App Store</span>
            <span>clique aqui e baixe agora</span>
          </div>
        </button>

        <button className="flex flex-row justify-center items-start text-text-light border-2 border-primary-default rounded-lg p-1.5 shadow-lg transform active:scale-95 transition-transform">
          <Image src="/icon/GooglePlay.png" width={50} height={50} alt="logo" />
          <div className="flex flex-col items-start">
            <span className="mb-1">Play Store</span>
            <span>clique aqui e baixe agora</span>
          </div>
        </button>
      </div>
    </div>
  );
}
