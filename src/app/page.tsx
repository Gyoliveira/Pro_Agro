import Image from "next/image";
import Link from "next/link";

import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex w-full h-full  flex-col ">
      <div className="flex flex-col min-h-screen bg-home_page bg-cover bg-no-repeat bg-center ">
        <Header />

        {/* CONTENT */}
        <div className="flex flex-col justify-center items-center text-text-light mx-15p ">
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

      {/* CONTENT 2 */}
      <div className="flex flex-col bg-white mb-14">
        <div className="flex flex-col mx-15p">
          <h1 className="flex justify-center text-3xl mb-24 font-semibold">
            Bem vindo a
            <span className="text-primary-default ml-2">Pro Agro</span>
          </h1>

          <div className="mb-5">
            <h1 className=" flex text-3xl mb-5 font-semibold">
              Por Que
              <span className="text-primary-default ml-2">Nos Escolher:</span>
            </h1>
            <h1 className="mb-3 font-medium">
              Existem diversos motivos pelos quais uma pessoa ou empresa poderia
              querer contratar a Pro Agro, incluindo:
            </h1>

            <div className="flex flex-row items-center mb-3">
              <Image
                src={"/icon/check_circle.png"}
                width={30}
                height={30}
                alt={"check"}
              />
              <h1>A Pro Agro é uma empresa de agronegócio</h1>
            </div>
            <div className="flex flex-row items-center mb-3">
              <Image
                src={"/icon/check_circle.png"}
                width={30}
                height={30}
                alt={"check"}
              />
              <h1>Oferece serviços personalizados e sustentáveis</h1>
            </div>
            <div className="flex flex-row items-center mb-3">
              <Image
                src={"/icon/check_circle.png"}
                width={30}
                height={30}
                alt={"check"}
              />
              <h1>
                Busca melhorar a produtividade e rentabilidade dos clientes
              </h1>
            </div>
            <div className="flex flex-row items-center mb-3">
              <Image
                src={"/icon/check_circle.png"}
                width={30}
                height={30}
                alt={"check"}
              />
              <h1>Conta com equipe experiente e acesso a recursos</h1>
            </div>
            <div className="flex flex-row items-center mb-3">
              <Image
                src={"/icon/check_circle.png"}
                width={30}
                height={30}
                alt={"check"}
              />
              <h1>Promove o desenvolvimento sustentável da região.</h1>
            </div>
          </div>

          <div>
            <h1 className="flex justify-center text-3xl font-semibold mb-5">
              Nossos <span className="text-primary-default ml-2">Projetos</span>
            </h1>
            <h1 className="text-base text-center font-semibold mb-10">
              Existem diversos motivos pelos quais uma pessoa ou empresa poderia
              querer contratar a Pro Agro, incluindo:
            </h1>
            <div className="my-5 grid grid-cols-3 gap-2 justify-center justify-items-center">
              <Image
                src={"/img/homeGrid/image1.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
              />
              <Image
                src={"/img/homeGrid/image2.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
              />
              <Image
                src={"/img/homeGrid/image3.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
              />
              <Image
                src={"/img/homeGrid/image4.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
              />
              <Image
                src={"/img/homeGrid/image5.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
              />
              <Image
                src={"/img/homeGrid/image6.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT 2 */}

      <div className="flex flex-col justify-center items-center w-full bg-home_banner bg-cover bg-no-repeat bg-center py-24 mb-16 text-text-light">
        <h1 className="mb-10 text-2xl font-semibold ">Nós trabalhamos com o que amamos</h1>
        <button className="bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full">
          <Link href="/pages/login">Trabalhe Conosco</Link>
        </button>
      </div>
    </main>
  );
}
