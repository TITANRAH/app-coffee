import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

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

const letterAnim = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: [0.9, 0, 0.23, 1], delay: i[0] },
  }),
  exit: {
    y: "100%",
    opacity: 0,

    transition: { duration: 1.5, ease: [0.9, 0, 0.23, 1], delay: 0.09 },
  },
};

const getLetter = (name: string) => {
  let letters: React.JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        key={index}
        custom={[index * 0.03, (name.length - index) * 0.01]}
        className="relative inline-block"
      >
        {letter}
      </motion.span>
    );
  });

  return letters;
};

function NavList() {
  return (
    <ul className="flex flex-col text-center gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="flex overflow-hidden hover:text-slate-200 transition-all"
        >
          {getLetter(link.name)}
        </Link>
      ))}
    </ul>
  );
}

export default NavList;
