import React from "react";

interface Props {
  placeholder: string;
  type: string;
  id?: string;
  name?: string;
  color?: string
}

export default function Input({ placeholder, type, id, name, color }: Props) {
  return (
    <div className="flex flex-col p-5">
      <input
        className={`bg-transparent outline-0 ${
          !color ? "text-white" : color
        } mb-2 px-2`}
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
      />
      <div className="mb-5 h-1 bg-gradient-to-r from-primary-dark to-primary-default" />
    </div>
  );
}
