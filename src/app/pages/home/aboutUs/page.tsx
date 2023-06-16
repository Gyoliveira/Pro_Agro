import Image from 'next/image'
import Link from 'next/link'
import Header from '../../../components/Header'

export default function AboutUs() {
  return (
    <main className="flex w-full h-full flex-col">
      <div className='bg-red-600 flex justify-center items-center flex-col '>
        <Header />
        <h1 className='text-3xl mb-3'>
          Um pouco mais sobre nós
        </h1>
        <h1>
          Crescemos juntos. De um jeito colaborativo. De um jeito agro!
        </h1>
        <div className='flex flex-row bg-primary-light w-95vw h-30'>
          <div>
            <h1>abluebaleahiafnnaoaboadknojadn</h1>
          </div>
          <div/>          
          <div>
            <h1>abluebaleahiafnnaoaboadknojadn</h1>
          </div>          
        </div>
        <button className="bg-gradient-to-r from-primary-default to-primary-light py-2 px-8 rounded-full shadow-lg transform active:scale-95 transition-transform">
            <Link href="">Trabalhe conosco!</Link>
          </button>
      </div>
      
    </main>
  )
}
