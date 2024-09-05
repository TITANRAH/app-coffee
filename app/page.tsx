"use client";

import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";
import Image from "next/image";
import { useEffect } from "react";


// instalo locomotive version beta

// aplico el useeffect para traer locomotive 
// useEffect(() => {
//   const loadLocomotiveScroll = async () => {
//     const LocomotiveScroll = (await import("locomotive-scroll")).default;
//     new LocomotiveScroll();
//   };

//   loadLocomotiveScroll();
// }, []);

// voy al div donde quiero usar en este caso 
// hero component linea 19 y aplico estas propiedades al div

//  data-scroll
//           data-scroll-speed="0.4"

export default function Home() {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero/>
      <Explore/>
      <About/>
      <Menu/>
      <OpeningHours/>
      <Testimonials/>

      {/* hol */}

    </div>
  );
}
