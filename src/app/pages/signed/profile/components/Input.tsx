import React from "react";

interface Props {
  placeholder: string;
  type: string;
  color?: string
}

export default function Input({ placeholder, type, color }: Props) {
  return (
    <label className="relative cursor-pointer">
      <input
        type={type}
        placeholder={placeholder}
        className={`mb-5 h-20 w-80 px-6 pt-5 text-base ${!color ? 'text-white' : color} bg-transparent border-text-default border-b-2 rounded-sm border-opacity-50 outline-none focus:border-primary-default placeholder-gray-300 placeholder-opacity-0 transition duration-200`}
      />
      <span className="text-base text-text-default text-opacity-80 absolute left-5 top-0 px-1 transition duration-200 input-text">
        {placeholder}
      </span>
    </label>
  );
}
