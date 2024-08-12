import React from "react";
import Image from "next/image";

function Explore() {
  return (
    <section className="py-12 mt-10 md:py-10 md:h-[90vh] md:w-[1200px] m-auto">
      <div className=" mx-auto md:w-full md:h-full flex md:justify-center md:items-center">
        <div className=" w-full flex flex-col md:flex-row lg:flex-row gap-12 md:gap-20">
          <div className="flex-1 p-2 flex flex-col justify-around items-end text-center md:text-left gap-12 md:gap-10 max-w-[400px] mx-auto md:max-w-none md:mx-0">
            <div className="relative flex items-start">
              <div className="md:max-w-[420px] md:text-right md:flex md:flex-col md:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/coffees/coffee-1.svg"
                    width={56}
                    height={56}
                    alt={""}
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Rich Espresso Blends
                </h3>
                <p>
                  Deléitese con los sabores intensos y robustos de nuestras
                  mezclas de espresso elaboradas por expertos. Perfectas para un
                  rápido energizante o un capricho para una tarde relajada.
                </p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="md:max-w-[420px] md:text-right md:flex md:flex-col md:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/coffees/coffee-2.svg"
                    width={56}
                    height={56}
                    alt={""}
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                Classic Drip Coffee
                </h3>
                <p className="max-w-[400px]">
                  Deléitese con los sabores intensos y robustos de nuestras
                  mezclas de espresso elaboradas por expertos. Perfectas para un
                  rápido energizante o un capricho para una tarde relajada.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center ">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt="cup"
                className="object-cover"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </div>
          <div className="flex-1 p-2 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
          <div className="relative flex items-start">
              <div className="md:max-w-[420px] md:text-right md:flex md:flex-col md:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/coffees/coffee-3.svg"
                    width={56}
                    height={56}
                    alt={""}
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                Smooth Cold Brews
                </h3>
                <p className="max-w-[400px] text-start">
                  Deléitese con los sabores intensos y robustos de nuestras
                  mezclas de espresso elaboradas por expertos. Perfectas para un
                  rápido energizante o un capricho para una tarde relajada.
                </p>
              </div>
            </div>
          <div className="relative flex items-start">
              <div className="md:max-w-[420px] md:text-right md:flex md:flex-col md:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/coffees/coffee-4.svg"
                    width={56}
                    height={56}
                    alt={""}
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                Flavorful Latte Varieties
                </h3>
                <p className="max-w-[400px] text-start">
                  Deléitese con los sabores intensos y robustos de nuestras
                  mezclas de espresso elaboradas por expertos. Perfectas para un
                  rápido energizante o un capricho para una tarde relajada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
