import Image from "next/image";

export default function DevjoyHero() {
  return (
  <section className="block">
    <div className="px-5 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
            <div className="max-[991px]:max-w-[720px]">
              <div className="mb-4 flex flex-row items-center">
                <div className="mr-4 w-10 [border-top:1px_solid_rgb(0,_0,_0)]"></div>
                <p className="font-medium max-[479px]:text-sm">500+ Components</p>
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">The Website You Want Without The Dev Time.</h1>
              <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                <p className="text-sm text-[#636262] sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
              </div>
              <div className="mx-0 mb-4 pb-4">
                <form name="email-form" className="relative max-w-[80%]">
                  <input type="email" className="m-0 block h-9 w-full border border-solid border-black bg-white px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec]" name="email-4" placeholder="Enter your email" />
                  <input type="submit" value="Subscribe" className="absolute right-0 top-[5px] m-0 inline-block cursor-pointer items-center bg-black px-6 py-2 text-center font-semibold text-white max-[479px]:relative max-[479px]:w-full sm:right-[5px]" />
                  <div></div>
                  <div></div>
                </form>
              </div>
              <div className="flex grid-flow-row gap-[16px] [grid-template:'Area'_/_1fr_1fr_1fr]">
                <div className="mr-0 flex items-center sm:mr-6 md:mr-10">
                  <Image src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9481ece6cf9c_Vector%20(9).svg" alt="" className="mr-2 inline-block max-w-full" />
                  <p className="text-sm sm:text-sm">Customers</p>
                </div>
                <div className="mr-0 flex items-center sm:mr-6 md:mr-10">
                  <Image src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9481ece6cf9c_Vector%20(9).svg" alt="" className="mr-2 inline-block max-w-full" />
                  <p className="text-sm sm:text-sm">24/7 Support</p>
                </div>
                <div className="mr-0 flex items-center sm:mr-6 md:mr-10">
                  <Image src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9481ece6cf9c_Vector%20(9).svg" alt="" className="mr-2 inline-block max-w-full" />
                  <p className="text-sm sm:text-sm">Cloud-based</p>
                </div>
              </div>
            </div>
            <div className="">
              <Image src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg" alt="" className="mx-auto inline-block h-full w-full max-w-[640px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}