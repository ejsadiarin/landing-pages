import { Button } from '@/components/ui/button';
import HamburgerMenu from './HamburgerMenu';
import Image from 'next/image';

export default function Home() {

  return (
    <body className='w-full h-full'>
      {/* Navbar */}
      <nav className='flex justify-around items-center w-full h-12 border-2 border-b-gray-500'>
        <Image src='/tarkinge.svg' alt='Tarkinge Logo' width='40' height='40' />
        <p className='font-bold text-lg'>Tarkinge</p>
        <div className='flex gap-5'>
          <h3 className='font-bold'>Docs</h3>
          <HamburgerMenu />
        </div>
      </nav>

      {/* Hero */}
      <main className='m-20'>
        <article className='mb-4'>
          <p>Powered by AI</p>
          <h1 className='font-bold'>Supercharge your design workflow</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores natus perferendis nemo, inventore molestias id placeat veritatis at veniam et harum beatae? Nesciunt magnam optio autem architecto rerum, ut mollitia.</p>
        </article>
        <Button className='w-auto h-auto font-bold px-5 py-3'>Start for free</Button>
      </main>

    </body>
  );
}
