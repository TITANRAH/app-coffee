import React from "react";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/",
    name: "Explora",
  },
  {
    href: "/",
    name: "Nosotros",
  },
  {
    href: "/",
    name: "Menú",
  },
  {
    href: "/",
    name: "Contacto",
  },
];

function Footer() {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* overlay */}

      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>

      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/logo.svg"
              fill
              alt=""
              className="object-contain"
            />
          </Link>

          {/* nav */}

          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="uppercase text-white tracking-widest hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* social */}

          <ul className="flex flex-row gap-3">

                <Link 
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                    <FaYoutube className="w-5 h-5"/>
                </Link>
                <Link 
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                    <FaInstagram className="w-5 h-5"/>
                </Link>
                <Link 
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                    <FaTwitter className="w-5 h-5"/>
                </Link>
                <Link 
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all">
                    <FaFacebook className="w-5 h-5"/>
                </Link>
          </ul>

        </div>

        <div className="py-10 text-center">
            Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}

export default Footer;
