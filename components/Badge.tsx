import Image from "next/image";
import React from "react";

interface Props {
    containerStyles: string;
}

function Badge(props: Props) {
  const { containerStyles } = props;
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src="/assets/badge.svg"
        fill
        alt="badge"
        className="object-contain"
      />
    </div>
  );
}

export default Badge;
