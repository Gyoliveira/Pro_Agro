import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="bg-primary-default p-4 rounded-lg">
          <Link href="/pages/login">LOGAR</Link>
        </h1>
    </main>
  )
}
