import { Button } from '@/components/ui/button';
import HamburgerMenu from './HamburgerMenu';
import Image from 'next/image';

export default function Home() {

  return (
    <body className='w-full h-full'>
      {/* Navbar */}
      <nav className='flex justify-around items-center w-full h-12'>
        <Image src='/tarkinge.svg' alt='Tarkinge Logo' width='50' height='50' />
        <p className='font-bold text-lg'>Tarkinge</p>
        <HamburgerMenu />
      </nav>

      {/* Hero */}
      <main>
        <article>test</article>
        <Button>Next</Button>
      </main>

    </body>
  );
}
