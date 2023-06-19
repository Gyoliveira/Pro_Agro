import Image from "next/image";

interface Prop {
  nameIcon: string;
  customStyle?: string;
  isSelected?: boolean;
  onFunction?: Function;
}

export default function Icon({
  nameIcon,
  customStyle,
  isSelected,
  onFunction,
}: Prop) {
  const styleSelect = "bg-primary-blur p-2 rounded-md";

  return (
    <div
      className={`${
        isSelected && styleSelect
      } mb-6 transform active:scale-95 transition-transform`}
      onClick={() => onFunction?.()}
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
