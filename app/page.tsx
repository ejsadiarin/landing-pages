import { Button } from "@/components/ui/button";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";

export default function Home() {
  return (
    <body className="flex flex-col w-full h-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full h-12 p-4 mt-3">
        <div className="flex justify-center items-center gap-3">
          <Image
            src="/tarkinge.svg"
            alt="Tarkinge Logo"
            width="40"
            height="40"
            className="rounded-full"
          />
          <p className="font-bold text-lg font-inter">Tarkinge</p>
        </div>
        <div className="flex gap-5">
          <h3 className="font-bold font-manrope">Docs</h3>
          <HamburgerMenu />
        </div>
      </nav>

      {/* Hero */}
      <main className="mx-4 my-10 w-fit h-auto">
        <article className="flex flex-col gap-5 mb-4">
          <div>
            <p className="font-medium text-[#282828] ">Powered by AI</p>
            <h1 className="font-[600] text-5xl text-[#282828] antialiased leading-snug">
              Supercharge your design workflow
            </h1>
          </div>
          <p className="text-lg text-[#5F6980] mb-3 self-stretch">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            natus perferendis nemo, inventore molestias id placeat veritatis at
            veniam et harum beatae? Nesciunt magnam optio autem architecto
            rerum, ut mollitia.
          </p>
        </article>
        <Button className="w-auto h-auto font-semibold px-8 py-5 text-lg bg-[#282828] leading-7">
          Start for free
        </Button>
      </main>
      <div className="bg-blue-100 w-[700px] h-[700px] rounded-full
          border-spacing-4 shadow-slate-800
          drop-shadow-2xl shadow-2xl backdrop-blur-md fixed -bottom-20
          -right-52 -z-10 overflow-hidden scroll-mx-0" 
                      />
    </body>
  );
}
