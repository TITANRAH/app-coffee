import React from "react";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Nuestro Trabajo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut turpis ut nisi ultricies pulvinar. Sed nec odio euismod, ultrices ipsum vitae, posuere nunc. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut turpis ut nisi ultricies pulvinar. Sed nec odio euismod, ultrices ipsum vitae, posuere nunc.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Nuestra Promesa",
    description:
      "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Nuestro Equipo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut turpis ut nisi ultricies pulvinar. Sed nec odio euismod, ultrices ipsum vitae, posuere nunc. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut turpis ut nisi ultricies pulvinar. Sed nec odio euismod, ultrices ipsum vitae, posuere nunc.",
  },
];

function About() {
  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true
        },
      }
    );

    return () => {
      animation.kill();
    }
  }, []);
  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-screen h-screen flex flex-col justify-center items-center relative"
            >
              <div className="container mx-auto">
                <div className="flex gap-[30px] relative">
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles=" w-[180px] h-[180px]" />
                    <div className="max-w-[560px] text-center">
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">
                          {item.title.split(" ")[1]}
                        </span>
                      </h2>
                    </div>

                    <div>
                      <Separator />
                    </div>

                    <p className="leading-relaxed mb-16 px-8 xl:px-0">
                      {item.description}
                    </p>

                    <button className="btn">Ver Más</button>
                  </div>
                  <div className="hidden md:flex flex-1 w-full h-[70h] relative">
                    <Image
                      src={item.imgSrc}
                      fill
                      className="object-cover"
                      quality={100}
                      priority
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
