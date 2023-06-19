import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  icon: string;
}

export default function Selection({ name, icon }: Props) {
  return (
    <div className="flex flex-row items-center mb-5">
        <Image
              src={`/icon/${icon}.png`}
              width={20}
              height={20}
              alt={name}
            />
          <h1 className="ml-2">{name}</h1>
    </div>
  );
}
