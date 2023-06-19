import React from "react";
import { Field } from "formik";

interface Props {
  placeholder: string;
  type: string;
  color?: string;
  name?: string;
  error?: string;
}

export default function Input({ placeholder, type, color, name, error }: Props) {
  return (
    <label className="relative cursor-pointer">
      <Field
        type={type}
        placeholder={placeholder}
        className={`mb-5 h-14 w-50 px-6 pt-5 text-base ${
          !color ? "text-white" : color
        } bg-transparent border-text-default border-b-2 rounded-sm border-opacity-50 outline-none focus:border-primary-default placeholder-gray-300 placeholder-opacity-0 transition duration-200`}
        name={name}
      />
      <span className="text-base text-text-default text-opacity-80 absolute left-5 top-5 px-1 transition duration-200 input-text">
        {placeholder}
      </span>
      {error && <p className="mb-5 text-warning text-xs ml-2 mt-1">{error}</p>}
    </label>
  );
}
