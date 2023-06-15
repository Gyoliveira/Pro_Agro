import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-full  flex-col ">
      <div className="flex flex-col min-h-screen bg-home_page bg-cover bg-no-repeat bg-center ">
        {/* HEADER */}
        <div className="flex flex-row justify-around absolute w-full h-28 items-center text-text-light">
          <h1 className="text-xl">Pro Agro</h1>
          <div className="flex flex-row justify-around w-1/4">
            <h1>Inicio</h1>
            <h1>Serviços</h1>
            <h1>Sobre Nós</h1>
          </div>

          <button className="bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full">
            <Link href="/pages/login">Login</Link>
          </button>
        </div>
        {/* HEADER */}

        {/* CONTENT */}
        <div className="flex flex-col justify-center items-center text-text-light mx-15p mt-30vh">
          <h1 className="mb-5 ">Nossa missão</h1>
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
          <button className="z-10 absolute bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full bottom-48">
            <Link href="/pages/login">Saiba Mais</Link>
          </button>
        </div>
        <div className="z-0 w-full absolute bottom-0">
          <Image
              src="/img/coisa.svg"
              width={1920}
              height={475}
              className="object-cover"
              alt={`alt`}
            />
        </div>
        {/* CONTENT */}
      </div>
      {/* fim da primeira pagina */}
      <div className="flex flex-col min-h-screen  bg-white">
        <div className="flex flex-col mx-15p">
          <h1 className="flex justify-center text-2xl mb-20">
            Bem vindo a <h1 className="text-primary-default ml-2">Pro Agro</h1>
          </h1>
          <div className="mb-5">
            <h1 className=" flex text-2xl mb-5">
              Por Que{" "}
              <h1 className="text-primary-default ml-2">Nos Escolher:</h1>
            </h1>
            <h1 className="mb-3">
              Existem diversos motivos pelos quais uma pessoa ou empresa poderia
              querer contratar a Pro Agro, incluindo:
            </h1>
            <h1 className="mb-3">A Pro Agro é uma empresa de agronegócio</h1>
            <h1 className="mb-3">
              Oferece serviços personalizados e sustentáveis
            </h1>
            <h1 className="mb-3">
              Busca melhorar a produtividade e rentabilidade dos clientes
            </h1>
            <h1 className="mb-3">
              Conta com equipe experiente e acesso a recursos
            </h1>
            <h1 className="mb-10">
              Promove o desenvolvimento sustentável da região.
            </h1>
          </div>
          <h1 className=" flex text-2xl mb-3">
            Nossos <h1 className="text-primary-default ml-2">Projetos</h1>
          </h1>
          <h1 className="text-base ">
            Existem diversos motivos pelos quais uma pessoa ou empresa poderia
            querer contratar a Pro Agro, incluindo
          </h1>
        </div>
      </div>
    </main>
  );
}
