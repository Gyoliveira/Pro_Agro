import { Field } from "formik";
import React from "react";

interface Props {
  placeholder: string;
  type: string;
  id?: string;
  name?: string;
  error?: string;
}

export default function FormField({
  placeholder,
  type,
  id,
  name,
  error,
}: Props) {
  return (
    <div className="flex flex-col">
      <Field
        className="bg-transparent outline-0 px-2 placeholder-white/50"
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
      />
      <div
        className={`${!error && "mb-5"} h-1  ${
          error
            ? "bg-gradient-to-r from-primary-dark to-warning"
            : "bg-gradient-to-r from-primary-dark to-primary-default"
        } `}
      />
      {error && <p className="mb-5 text-warning text-xs ml-2 mt-1">{error}</p>}
    </div>
  );
}
