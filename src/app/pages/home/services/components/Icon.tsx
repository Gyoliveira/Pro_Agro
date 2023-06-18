import Image from "next/image";

interface Prop {
  nameIcon: string;
  customStyle?: string;
  isSelected?: boolean;
}

export default function Icon({ nameIcon, customStyle, isSelected }: Prop) {
  const styleSelect = "bg-primary-light p-2 rounded-md";

  return (
    <div
      className={`${
        isSelected && styleSelect
      } mb-6 transform active:scale-95 transition-transform`}
    >
      <Image
        src={`/icon/${nameIcon}.png`}
        width={20}
        height={20}
        alt={nameIcon}
        className={customStyle}
      />
    </div>
  );
}
