import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Home() {
  return (
    <body>
      {/* Navbar */}
      <nav className='flex justify-around w-full'>
        <p>icon</p>
        <div className='flex gap-5'>
          <a href="/">Home</a>
          <a href="/">Dashboard</a>
          <a href="/">Contact</a>
        </div>
        <p>profile</p>
      </nav>

      {/* Hero */}
      <main>
        <article>test</article>
        <Button>Next</Button>
      </main>

    </body>
  );
}
