import Image from 'next/image'
import Link from 'next/link'
import Header from '../../../components/Header'

export default function AboutUs() {
  return (
    <main className="flex w-full h-full flex-col">
      <div className='bg-red-600 flex justify-center items-center flex-col text-text-light'>
        <Header />
        <h1 className='text-4xl mb-3'>
          Um pouco mais sobre nós
        </h1>
        <h1>
          Crescemos juntos. De um jeito colaborativo. De um jeito agro!
        </h1>
        <div className='flex flex-row bg-primary-light w-95vw h-60vh mt-14 rounded-full'>
          <div className='flex justify-center items-center flex-col w-1/2 p-6 px-24'>
            <h1 className='text-3xl mb-3 text-primary-dark'>O início</h1>
            <p className='text-md'>
              O Pro Agro nasceu como um projeto universitário com o propósito de apoiar agricultores e promover a sustentabilidade.  
            </p>
            <p className='text-md'>
              Nosso foco é aumentar a produtividade, rentabilidade e qualidade de vida, impulsionando um futuro agrícola próspero e sustentável. Desde então, crescemos e nos tornamos uma iniciativa estabelecida, comprometida em fazer a diferença no agronegócio. 
            <p/>
            </p>
          </div>
          <div className='bg-primary-default w-1 h-24'/>          
          <div className='flex justify-center items-center flex-col w-1/2 p-6'>
            <h1 className='text-3xl mb-3 text-primary-dark'>O que fazemos?</h1>
            <p className='text-md'>    
              Nossos serviços abrangem uma ampla gama de áreas, incluindo consultoria, assistência técnica, gestão de propriedades rurais, produção de insumos e comercialização de produtos agrícolas. 
            </p>
            <p className='text-md'>
            Trabalhamos em estreita colaboração com os agricultores, compreendendo suas necessidades específicas e oferecendo soluções personalizadas para impulsionar sua produtividade e rentabilidade.
            </p>
          </div>          
        </div>
        <button className="bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full">
            <Link href="">Trabalhe conosco!</Link>
          </button>
      </div>
      
    </main>
  )
}
