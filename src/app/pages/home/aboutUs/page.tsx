import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";

export default function AboutUs() {
  return (
    <main className="flex w-full h-full flex-col">
      <div className="flex justify-center items-center flex-col text-text-light bg-home_page bg-cover bg-no-repeat bg-center ">
        <Header />
        <h1 className="text-4xl mb-3">Um pouco mais sobre nós</h1>
        <h1>Crescemos juntos. De um jeito colaborativo. De um jeito agro!</h1>
        <div className="flex flex-row bg-primary-light w-95vw h-60vh mt-14 rounded-full">
          <div className="flex justify-center items-center flex-col w-1/2 h1-6 px-24">
            <h1 className="text-3xl mb-3 text-primary-dark pb-9">O início</h1>
            <h1 className="text-md">
              O Pro Agro nasceu como um projeto universitário com o propósito de
              apoiar agricultores e promover a sustentabilidade.
            </h1>
            <h1 className="text-md">
              Nosso foco é aumentar a produtividade, rentabilidade e qualidade
              de vida, impulsionando um futuro agrícola próspero e sustentável.
              Desde então, crescemos e nos tornamos uma iniciativa estabelecida,
              comprometida em fazer a diferença no agronegócio.
              <h1 />
            </h1>
          </div>
          <div className="bg-primary-default flex justify-center items-center flex-row w-1 h-56 mt-16vh mb-52" />
          <div className="flex justify-center items-center flex-col w-1/2 h1-6 pr-10">
            <h1 className="text-3xl mb-3 text-primary-dark pb-9">
              O que fazemos?
            </h1>
            <h1 className="text-md mr-8 ml-4 text-right">
              Nossos serviços abrangem uma ampla gama de áreas, incluindo
              consultoria, assistência técnica, gestão de propriedades rurais,
              produção de insumos e comercialização de produtos agrícolas.
            </h1>
            <h1 className="text-md mr-8 ml-4 text-right">
              Trabalhamos em estreita colaboração com os agricultores,
              compreendendo suas necessidades específicas e oferecendo soluções
              personalizadas para impulsionar sua produtividade e rentabilidade.
            </h1>
          </div>
        </div>
        <div className="pt-10 pb-10 relative mr-auto pl-10">
          <button className="bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full shadow-lg transform active:scale-95 transition-transform">
            <Link href="">Trabalhe conosco!</Link>
          </button>
        </div>
      </div>

      <div className=" text-text-default bg-aboutUs_banner bg-cover bg-no-repeat bg-center">
        <div className="flex justify-center items-center flex-col bg-primary-blur/20">
          <h1 className="text-4xl mb-3 mt-20 ">Nossas motivações!</h1>
          <div className="bg-primary-light w-2/4  h1-20 rounded-2xl mb-20 bg-opacity-50">
            <h1 className="text-primary-default py-5 px-10">
              Embora tenhamos começado como um trabalho de faculdade, o Pro Agro
              cresceu além das nossas expectativas. Hoje, estamos orgulhosos de
              ser uma iniciativa estabelecida, com uma sólida base de clientes e
              um histórico comprovado de sucesso. Continuamos a nos inspirar na
              nossa jornada inicial e nos esforçamos para criar um futuro
              agrícola mais próspero e sustentável. <br />O Pro Agro é a prova
              de que uma ideia, nascida em um trabalho de faculdade, pode se
              transformar em uma iniciativa bem-sucedida. Estamos ansiosos para
              continuar crescendo e fazendo a diferença no agronegócio, ao mesmo
              tempo em que aprendemos e nos adaptamos às demandas e desafios em
              constante evolução do setor.
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
