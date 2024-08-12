import Image from "next/image";
import React from "react";

interface Props {
  bg?: string;
}

function Separator(props: Props) {
  const { bg = "accent" } = props;

  const imgSrc =
    bg === "accent"
      ? "/assets/separator-accent.svg"
      : "/assets/separator-white.svg";

  return <div className="relative w-[168px] h-[26px] mx-auto">
    <Image 
    src={imgSrc}
    fill
    alt=""
    />
  </div>;
}

export default Separator;
