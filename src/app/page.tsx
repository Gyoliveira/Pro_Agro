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
          <h1 className="mb-5  font-playfair_bold text-2xl">Nossa missão</h1>
          <h1 className="my-5 text-4xl text-justify font-playfair_bold">
            A Pro Agro é uma iniciativa voltada para o agronegócio
          </h1>
          <h1 className="text-justify font-playfair_regular">
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
          <button className="z-10 absolute bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full bottom-48 shadow-lg transform active:scale-95 transition-transform font-playfair_regular">
            <Link href="">Saiba Mais</Link>
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
      <div className="flex flex-col bg-white mb-14 bg-home_leaf bg-contain bg-no-repeat">
        <div className="flex flex-col mx-15p">
          <h1 className="flex justify-center text-3xl mb-24 font-semibold font-playfair_bold">
            Bem vindo a
            <span className="text-primary-default ml-2">Pro Agro</span>
          </h1>

          <div className="mb-5">
            <h1 className=" flex text-3xl mb-5 font-semibold font-playfair_bold">
              Por Que
              <span className="text-primary-default ml-2 ">Nos Escolher:</span>
            </h1>
            <h1 className="mb-3 font-semibold font-playfair_regular">
              Existem diversos motivos pelos quais uma pessoa ou empresa poderia
              querer contratar a Pro Agro, incluindo:
            </h1>

            <div className="font-playfair_regular font-medium">
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
          </div>

          <div>
            <h1 className="flex justify-center text-3xl font-semibold mb-5 font-playfair_regular">
              Nossos <span className="text-primary-default ml-2">Projetos</span>
            </h1>
            <h1 className="text-base text-center font-semibold mb-10 font-playfair_regular">
              Existem diversos motivos pelos quais uma pessoa ou empresa poderia
              querer contratar a Pro Agro, incluindo:
            </h1>
            <div className="my-5 grid grid-cols-3 gap-2 justify-center justify-items-center">
              <Image
                src={"/img/homeGrid/image1.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
                className="transition duration-300 ease-in-out hover:scale-110 hover:rounded-lg"
              />
              <Image
                src={"/img/homeGrid/image2.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
                className="transition duration-300 ease-in-out hover:scale-110 hover:rounded-lg"
              />
              <Image
                src={"/img/homeGrid/image3.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
                className="transition duration-300 ease-in-out hover:scale-110 hover:rounded-lg"
              />
              <Image
                src={"/img/homeGrid/image4.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
                className="transition duration-300 ease-in-out hover:scale-110 hover:rounded-lg"
              />
              <Image
                src={"/img/homeGrid/image5.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
                className="transition duration-300 ease-in-out hover:scale-110 hover:rounded-lg"
              />
              <Image
                src={"/img/homeGrid/image6.png"}
                width={305}
                height={250}
                alt={"homeGrid"}
                className="transition duration-300 ease-in-out hover:scale-110 hover:rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT 2 */}

      <div className="flex flex-col justify-center items-center w-full bg-home_banner bg-cover bg-no-repeat bg-center py-24 text-text-light">
        <h1 className="mb-10 text-2xl font-semibold font-playfair_regular">
          Nós trabalhamos com o que amamos
        </h1>
        <button className="bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full shadow-lg transform active:scale-95 transition-transform font-playfair_regular">
          <Link href="">Trabalhe Conosco</Link>
        </button>
      </div>
      {/* fim da 3 pag */}
      <div className=" bg-home_bgCeo bg-cover bg-no-repeat bg-center">
        <div className="flex flex-row flex-1 h-80vh mx-15p">
          <div className="flex flex-1 bg-home_ceo bg-contain bg-no-repeat bg-center" />
          <div className="flex flex-col w-2/3 py-20 font-playfair_regular">
            <h1 className="mb-10 text-3xl font-semibold text-center">
              Conheça nossa{" "}
              <span className="text-primary-default ml-1">CEO</span>
            </h1>
            <h1 className="mb-10 text-lg text-right font-medium text-primary-focused">
              Isabel - CEO da Pro Agro: empreendedora experiente e apaixonada
              pelo agronegócio. Ela assumiu a liderança da Pro Agro há 5 anos,
              após ter trabalhado em diversas empresas do setor em cargos de
              alta gerência. Isabel é uma líder inspiradora, que sabe como
              motivar sua equipe e alinhar todos os esforços da empresa com os
              valores e objetivos da Pro Agro. Isabel é uma defensora da
              sustentabilidade ambiental e social e está sempre empenhada em
              minimizar os impactos das atividades agrícolas no meio ambiente e
              nas comunidades locais. Além disso, ela é uma grande defensora da
              equidade de gênero no mercado de trabalho e busca promover a
              diversidade e inclusão dentro da empresa.
            </h1>
          </div>
        </div>
      </div>
      {/* fim da 4 pag ceo */}
      <div className="flex flex-col justify-center items-center px-15p pl-50p h-55vh bg-home_banner2 bg-cover bg-no-repeat bg-center">
        <h1 className="mb-10 text-3xl font-semibold font-playfair_regular text-text-focus text-justify">
          Transformando a agricultura com soluções inteligentes e sustentáveis.
        </h1>
        <button className="mt-24 bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full shadow-lg transform active:scale-95 transition-transform font-playfair_regular text-text-light">
          <Link href="">Trabalhe Conosco</Link>
        </button>
      </div>
      {/* fim da 5 pag */}
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

          <button className="border-2 border-primary-default rounded-lg flex flex-row">
            <Image
              src="/img/logo/logoReta.svg"
              width={80}
              height={80}
              alt="logo"
            />
            <div className="flex flex-col items-start">
           <span> App Store</span>
           <span>clique aqui e baixe agora</span>
           </div>
          </button>
          <h1>Play Store</h1>
        </div>
      </div>
    </main>
  );
}
