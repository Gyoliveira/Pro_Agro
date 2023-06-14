import React from "react";

interface Props {
  placeholder: string;
  type: string;
  id?: string;
  name?: string;
}

export default function Input({ placeholder, type, id, name }: Props) {
  return (
    <>
      <input
        className="bg-transparent outline-0"
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
      />
      <div className="mb-5 h-1 bg-gradient-to-r from-primary-dark to-primary-default" />
    </>
  );
}
