import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-full  flex-col ">
      <div className="flex flex-col min-h-screen bg-login_page bg-cover bg-no-repeat bg-center ">
        {/* HEADER */}
        <div className="flex flex-row  justify-around w-full h-28 items-center text-text-light">
          <h1 className="text-xl">Pro Agro</h1>
          <div className="flex flex-row justify-around w-1/4">
            <h1>Inicio</h1>
            <h1>Serviços</h1>
            <h1>Sobre Nós</h1>
          </div>

          <button className="bg-primary-default py-2 px-8 rounded-full">
            <Link href="/pages/login">Login</Link>
          </button>
        </div>
        {/* HEADER */}

        {/* CONTENT */}
        <div className="flex flex-col justify-center items-center text-text-light mx-15p">
          <h1>Nossa missão</h1>
          <h1 className="my-5 text-4xl text-justify">
            A Pro Agro é uma iniciativa voltada para o agronegócio
          </h1>
          <h1 className="text-justify">
            Buscamos promover o desenvolvimento econômico e social da região
            através da contratação de pequenos agricultores e prestação de
            serviços de agricultura. Com uma equipe altamente qualificada e
            experiente, a Pro Agro oferece serviços de consultoria, assistência
            técnica, gestão de propriedades rurais, produção de insumos e
            comercialização de produtos agrícolas. A Pro Agro é comprometida com
            a sustentabilidade ambiental e com a promoção do desenvolvimento
            sustentável das comunidades rurais. Seu objetivo principal é
            fornecer aos agricultores as ferramentas e recursos necessários para
            que possam aumentar sua produtividade e rentabilidade, melhorando
            assim a qualidade de vida e a segurança alimentar de suas famílias e
            comunidades.
          </h1>
        </div>
        {/* CONTENT */}
      </div>
      <div className="flex flex-col min-h-screen  bg-gray-700"></div>
    </main>
  );
}
