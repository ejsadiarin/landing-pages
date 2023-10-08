import GleamyNavButton from "@/components/gleamy/navbutton";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GleamyUI() {
  return (
    <body className="bg-black"> 
      <header>
        <nav className="flex justify-between items-center h-[15%] p-10 border-b-[1px] border-white">
          <a href="/" className="text-4xl font-bold text-white">
            Tarkinge
          </a>
          <section className="flex justify-evenly items-center gap-5 text-white">
            <a href="/gleamy">Menu</a>
            <p>|</p>
            <GleamyNavButton />
          </section>
        </nav>
      </header>
      <main className="mx-4 my-10 w-fit h-auto p-5">
        <article className="flex flex-col gap-5 mb-4 lg:gap-9">
          <section className="flex flex-col gap-5">
            <p className="font-medium text-[#282828] lg:text-xl md:text-lg">
              Powered by AI
            </p>
            <h1 className="font-[600] text-5xl text-[#282828] antialiased leading-tight lg:text-6xl md:text-6xl">
              Supercharge your design workflow
            </h1>
          </section>
          <p className="text-xl text-[#5F6980] mb-3 self-stretch leading-relaxed tracking-wide xl:w-1/2 lg:text-2xl md:text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            natus perferendis nemo, inventore molestias id placeat veritatis at
            veniam et harum beatae? Nesciunt magnam optio autem architecto
            rerum, ut mollitia.
          </p>
        </article>
        <Button className="w-auto h-auto font-semibold px-8 py-5 text-lg bg-[#282828] leading-7 lg:scale-110">
          Start for free
        </Button>
      </main>
    </body>
  );
}
