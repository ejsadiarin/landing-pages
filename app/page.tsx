import { Button } from '@/components/ui/button';
import HamburgerMenu from './HamburgerMenu';
import Image from 'next/image';

export default function Home() {

  return (
    <body className='w-full h-full'>
      {/* Navbar */}
      <nav className='flex justify-between items-center w-full h-12 p-4 border-2 border-b-gray-500'>
        <div className='flex justify-center items-center gap-5'>
          <Image src='/tarkinge.svg' alt='Tarkinge Logo' width='40' height='40' />
          <p className='font-bold text-lg font-inter'>Tarkinge</p>
        </div>
        <div className='flex gap-5'>
          <h3 className='font-bold font-manrope'>Docs</h3>
          <HamburgerMenu />
        </div>
      </nav>

      {/* Hero */}
      <main className='mx-4 my-10'>
        <article className='mb-4'>
          <p className='font-medium'>Powered by AI</p>
          <h1 className='font-sofia_sans font-[1000] text-[48px]'>Supercharge your design workflow</h1>
          <p className='text-[16px] text-gray-600 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores natus perferendis nemo, inventore molestias id placeat veritatis at veniam et harum beatae? Nesciunt magnam optio autem architecto rerum, ut mollitia.</p>
        </article>
        <Button className='w-auto h-auto font-bold px-7 py-3'>Start for free</Button>
      </main>

    </body>
  );
}


