import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <body className="flex flex-col w-full h-full overflow-x-hidden">
      {/* Navbar */}
      <header>
        <nav className="flex justify-between items-center w-full h-12 p-10 mt-12">
          <section className="flex justify-center items-center gap-7">
            <Image
              src="/tarkinge.svg"
              alt="Tarkinge Logo"
              width="60"
              height="60"
              className="rounded-full"
            />
            <a href="/" className="font-bold text-2xl">
              Tarkinge
            </a>
          </section>

          {/* Mobile Nav Bar Section */}
          <section className="flex gap-5 justify-center items-center">
            <a href="/" className="font-bold text-2xl">
              Docs
            </a>
            <MobileNavbar />
          </section>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-4 my-10 w-fit h-auto p-5">
        <article className="flex flex-col gap-5 mb-4">
          <section>
            <p className="font-medium text-[#282828] ">Powered by AI</p>
            <h1 className="font-[600] text-5xl text-[#282828] antialiased leading-tight">
              Supercharge your design workflow
            </h1>
          </section>
          <p className="text-xl text-[#5F6980] mb-3 self-stretch leading-relaxed tracking-wide">
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
      <div
        className="bg-blue-100 w-[700px] h-[700px] rounded-full
          border-spacing-4 shadow-slate-800
          drop-shadow-2xl shadow-2xl backdrop-blur-md fixed -bottom-20
          -right-52 -z-10 overflow-hidden scroll-mx-0"
      />
    </body>
  );
}
